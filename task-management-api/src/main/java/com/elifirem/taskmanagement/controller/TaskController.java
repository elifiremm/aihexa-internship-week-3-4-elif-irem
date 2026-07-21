package com.elifirem.taskmanagement.controller;

import com.elifirem.taskmanagement.dto.TaskRequest;
import com.elifirem.taskmanagement.dto.TaskResponse;
import com.elifirem.taskmanagement.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public ResponseEntity<TaskResponse> createTask(
            @Valid @RequestBody TaskRequest request
    ) {
        TaskResponse createdTask = taskService.createTask(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(createdTask);
    }

    @GetMapping
    public ResponseEntity<List<TaskResponse>> getAllTasks() {
        return ResponseEntity.ok(taskService.getAllTasks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskResponse> getTaskById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(taskService.getTaskById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaskResponse> updateTask(
            @PathVariable Long id,
            @Valid @RequestBody TaskRequest request
    ) {
        return ResponseEntity.ok(
                taskService.updateTask(id, request)
        );
    }

    @PatchMapping("/{id}/complete")
    public ResponseEntity<TaskResponse> markTaskAsCompleted(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(
                taskService.markTaskAsCompleted(id)
        );
    }

    @PatchMapping("/{id}/pending")
    public ResponseEntity<TaskResponse> markTaskAsPending(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(
                taskService.markTaskAsPending(id)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(
            @PathVariable Long id
    ) {
        taskService.deleteTask(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/completed")
    public ResponseEntity<List<TaskResponse>> getCompletedTasks() {
        return ResponseEntity.ok(
                taskService.getCompletedTasks()
        );
    }

    @GetMapping("/pending")
    public ResponseEntity<List<TaskResponse>> getPendingTasks() {
        return ResponseEntity.ok(
                taskService.getPendingTasks()
        );
    }
}