package com.elifirem.taskmanagement.exception;

import java.time.LocalDateTime;
import java.util.Map;

public class ErrorResponse {

    private int status;
    private String message;
    private LocalDateTime timestamp;
    private Map<String, String> validationErrors;

    public ErrorResponse() {
    }

    public ErrorResponse(
            int status,
            String message,
            LocalDateTime timestamp,
            Map<String, String> validationErrors
    ) {
        this.status = status;
        this.message = message;
        this.timestamp = timestamp;
        this.validationErrors = validationErrors;
    }

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public Map<String, String> getValidationErrors() {
        return validationErrors;
    }
}