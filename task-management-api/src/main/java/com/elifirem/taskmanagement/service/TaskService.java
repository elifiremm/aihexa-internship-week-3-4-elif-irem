package com.elifirem.taskmanagement.service;

import com.elifirem.taskmanagement.dto.TaskRequest;
import com.elifirem.taskmanagement.dto.TaskResponse;
import com.elifirem.taskmanagement.entity.Task;
import com.elifirem.taskmanagement.exception.TaskNotFoundException;
import com.elifirem.taskmanagement.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public TaskResponse createTask(TaskRequest request) {
        Task task = new Task();

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setDueDate(request.getDueDate());
        task.setCompleted(false);

        Task savedTask = taskRepository.save(task);

        return convertToResponse(savedTask);
    }

    public List<TaskResponse> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public TaskResponse getTaskById(Long id) {
        Task task = findTaskEntityById(id);

        return convertToResponse(task);
    }

    public TaskResponse updateTask(Long id, TaskRequest request) {
        Task task = findTaskEntityById(id);

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setDueDate(request.getDueDate());

        Task updatedTask = taskRepository.save(task);

        return convertToResponse(updatedTask);
    }

    public TaskResponse markTaskAsCompleted(Long id) {
        Task task = findTaskEntityById(id);

        task.setCompleted(true);

        Task updatedTask = taskRepository.save(task);

        return convertToResponse(updatedTask);
    }

    public TaskResponse markTaskAsPending(Long id) {
        Task task = findTaskEntityById(id);

        task.setCompleted(false);

        Task updatedTask = taskRepository.save(task);

        return convertToResponse(updatedTask);
    }

    public void deleteTask(Long id) {
        Task task = findTaskEntityById(id);

        taskRepository.delete(task);
    }

    public List<TaskResponse> getCompletedTasks() {
        return taskRepository.findByCompleted(true)
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    public List<TaskResponse> getPendingTasks() {
        return taskRepository.findByCompleted(false)
                .stream()
                .map(this::convertToResponse)
                .toList();
    }

    private Task findTaskEntityById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
    }

    private TaskResponse convertToResponse(Task task) {
        return new TaskResponse(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.isCompleted(),
                task.getCreatedAt(),
                task.getDueDate()
        );
    }
}