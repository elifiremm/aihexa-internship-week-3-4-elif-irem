const API_URL = "/api/tasks";

const taskForm = document.getElementById("taskForm");
const taskIdInput = document.getElementById("taskId");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("dueDate");

const formTitle = document.getElementById("formTitle");
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");

const taskList = document.getElementById("taskList");
const loadingText = document.getElementById("loadingText");
const emptyState = document.getElementById("emptyState");
const messageBox = document.getElementById("messageBox");

const totalTaskCount = document.getElementById("totalTaskCount");
const allCount = document.getElementById("allCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

const filterButtons = document.querySelectorAll(".filter-button");

let allTasks = [];
let currentFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
    setMinimumDate();
    loadTasks();
});

taskForm.addEventListener("submit", handleFormSubmit);
cancelButton.addEventListener("click", resetForm);

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        renderFilteredTasks();
    });
});

function setMinimumDate() {
    const today = new Date().toISOString().split("T")[0];
    dueDateInput.min = today;
}

async function loadTasks() {
    showLoading(true);

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Görevler alınamadı.");
        }

        allTasks = await response.json();

        updateStatistics();
        renderFilteredTasks();
    } catch (error) {
        showMessage(error.message, "error");
    } finally {
        showLoading(false);
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const taskId = taskIdInput.value;

    const taskData = {
        title: titleInput.value.trim(),
        description: descriptionInput.value.trim(),
        dueDate: dueDateInput.value || null
    };

    if (!taskData.title) {
        showMessage("Görev başlığı boş bırakılamaz.", "error");
        return;
    }

    const isUpdating = Boolean(taskId);

    const requestUrl = isUpdating
        ? `${API_URL}/${taskId}`
        : API_URL;

    const requestMethod = isUpdating
        ? "PUT"
        : "POST";

    try {
        submitButton.disabled = true;
        submitButton.textContent = isUpdating
            ? "Güncelleniyor..."
            : "Kaydediliyor...";

        const response = await fetch(requestUrl, {
            method: requestMethod,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData)
        });

        const responseBody = await readResponseBody(response);

        if (!response.ok) {
            throw new Error(getErrorMessage(responseBody));
        }

        showMessage(
            isUpdating
                ? "Görev başarıyla güncellendi."
                : "Görev başarıyla oluşturuldu.",
            "success"
        );

        resetForm();
        await loadTasks();
    } catch (error) {
        showMessage(error.message, "error");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = taskIdInput.value
            ? "Görevi Güncelle"
            : "Görevi Kaydet";
    }
}

function renderFilteredTasks() {
    let filteredTasks = [...allTasks];

    if (currentFilter === "pending") {
        filteredTasks = filteredTasks.filter(task => !task.completed);
    }

    if (currentFilter === "completed") {
        filteredTasks = filteredTasks.filter(task => task.completed);
    }

    renderTasks(filteredTasks);
}

function renderTasks(tasks) {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    }

    emptyState.classList.add("hidden");

    tasks.forEach(task => {
        const taskCard = document.createElement("article");

        taskCard.className = task.completed
            ? "task-card completed"
            : "task-card";

        taskCard.innerHTML = `
            <div class="task-card-header">
                <div>
                    <h3 class="task-title">${escapeHtml(task.title)}</h3>
                </div>

                <span class="status-badge ${task.completed ? "completed" : "pending"}">
                    ${task.completed ? "Tamamlandı" : "Bekliyor"}
                </span>
            </div>

            <p class="task-description">
                ${task.description
            ? escapeHtml(task.description)
            : "Açıklama bulunmuyor."
        }
            </p>

            <div class="task-details">
                <span>
                    Oluşturulma:
                    ${formatDateTime(task.createdAt)}
                </span>

                <span>
                    Son tarih:
                    ${task.dueDate
            ? formatDate(task.dueDate)
            : "Belirtilmedi"
        }
                </span>
            </div>

            <div class="task-actions">

                ${
            task.completed
                ? `
                            <button
                                class="action-button pending-button"
                                onclick="markAsPending(${task.id})"
                            >
                                Bekliyor Olarak İşaretle
                            </button>
                        `
                : `
                            <button
                                class="action-button complete-button"
                                onclick="markAsCompleted(${task.id})"
                            >
                                Tamamlandı Olarak İşaretle
                            </button>
                        `
        }

                <button
                    class="action-button edit-button"
                    onclick="startEdit(${task.id})"
                >
                    Düzenle
                </button>

                <button
                    class="action-button delete-button"
                    onclick="deleteTask(${task.id})"
                >
                    Sil
                </button>

            </div>
        `;

        taskList.appendChild(taskCard);
    });
}

async function markAsCompleted(id) {
    await updateTaskStatus(id, "complete");
}

async function markAsPending(id) {
    await updateTaskStatus(id, "pending");
}

async function updateTaskStatus(id, status) {
    try {
        const response = await fetch(`${API_URL}/${id}/${status}`, {
            method: "PATCH"
        });

        const responseBody = await readResponseBody(response);

        if (!response.ok) {
            throw new Error(getErrorMessage(responseBody));
        }

        showMessage(
            status === "complete"
                ? "Görev tamamlandı olarak işaretlendi."
                : "Görev bekliyor olarak işaretlendi.",
            "success"
        );

        await loadTasks();
    } catch (error) {
        showMessage(error.message, "error");
    }
}

function startEdit(id) {
    const task = allTasks.find(item => item.id === id);

    if (!task) {
        showMessage("Düzenlenecek görev bulunamadı.", "error");
        return;
    }

    taskIdInput.value = task.id;
    titleInput.value = task.title;
    descriptionInput.value = task.description || "";
    dueDateInput.value = task.dueDate || "";

    formTitle.textContent = "Görevi Güncelle";
    submitButton.textContent = "Görevi Güncelle";
    cancelButton.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function resetForm() {
    taskForm.reset();

    taskIdInput.value = "";
    formTitle.textContent = "Yeni Görev Ekle";
    submitButton.textContent = "Görevi Kaydet";
    cancelButton.classList.add("hidden");

    setMinimumDate();
}

async function deleteTask(id) {
    const confirmed = window.confirm(
        "Bu görevi silmek istediğine emin misin?"
    );

    if (!confirmed) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            const responseBody = await readResponseBody(response);
            throw new Error(getErrorMessage(responseBody));
        }

        showMessage("Görev başarıyla silindi.", "success");

        if (taskIdInput.value === String(id)) {
            resetForm();
        }

        await loadTasks();
    } catch (error) {
        showMessage(error.message, "error");
    }
}

function updateStatistics() {
    const completedTasks = allTasks.filter(task => task.completed);
    const pendingTasks = allTasks.filter(task => !task.completed);

    totalTaskCount.textContent = allTasks.length;
    allCount.textContent = allTasks.length;
    pendingCount.textContent = pendingTasks.length;
    completedCount.textContent = completedTasks.length;
}

function showLoading(isLoading) {
    if (isLoading) {
        loadingText.classList.remove("hidden");
        taskList.classList.add("hidden");
        emptyState.classList.add("hidden");
    } else {
        loadingText.classList.add("hidden");
        taskList.classList.remove("hidden");
    }
}

function showMessage(message, type) {
    messageBox.textContent = message;
    messageBox.className = `message ${type}`;

    setTimeout(() => {
        messageBox.classList.add("hidden");
    }, 4500);
}

async function readResponseBody(response) {
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
        return await response.json();
    }

    return null;
}

function getErrorMessage(responseBody) {
    if (!responseBody) {
        return "İşlem sırasında bir hata oluştu.";
    }

    if (responseBody.validationErrors) {
        return Object.values(responseBody.validationErrors).join(" ");
    }

    return responseBody.message || "İşlem sırasında bir hata oluştu.";
}

function formatDate(dateValue) {
    if (!dateValue) {
        return "Belirtilmedi";
    }

    return new Date(`${dateValue}T00:00:00`)
        .toLocaleDateString("tr-TR");
}

function formatDateTime(dateTimeValue) {
    if (!dateTimeValue) {
        return "Belirtilmedi";
    }

    return new Date(dateTimeValue)
        .toLocaleString("tr-TR");
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}