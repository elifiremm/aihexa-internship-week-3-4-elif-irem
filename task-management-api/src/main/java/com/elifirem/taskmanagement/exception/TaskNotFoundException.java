package com.elifirem.taskmanagement.exception;

public class TaskNotFoundException extends RuntimeException {

    public TaskNotFoundException(Long id) {
        super("Görev bulunamadı. ID: " + id);
    }
}