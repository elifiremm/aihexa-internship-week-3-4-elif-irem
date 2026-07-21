package com.elifirem.taskmanagement.dto;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public class TaskRequest {

    @NotBlank(message = "Görev başlığı boş bırakılamaz.")
    @Size(
            min = 3,
            max = 100,
            message = "Görev başlığı 3 ile 100 karakter arasında olmalıdır."
    )
    private String title;

    @Size(
            max = 500,
            message = "Görev açıklaması en fazla 500 karakter olabilir."
    )
    private String description;

    @FutureOrPresent(message = "Son teslim tarihi geçmiş bir tarih olamaz.")
    private LocalDate dueDate;

    public TaskRequest() {
    }

    public TaskRequest(String title, String description, LocalDate dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }
}