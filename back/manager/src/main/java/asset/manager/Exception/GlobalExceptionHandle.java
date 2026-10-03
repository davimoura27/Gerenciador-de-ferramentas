package asset.manager.Exception;

import java.time.LocalDateTime;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;
import java.util.stream.Collectors;
import org.springframework.web.bind.MethodArgumentNotValidException;
import asset.manager.Dto.GlobalException.ErrorResponseDto;

@RestControllerAdvice
public class GlobalExceptionHandle {
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ErrorResponseDto> handleResponseStatusException(ResponseStatusException exception){
        ErrorResponseDto error = new ErrorResponseDto(
            exception.getStatusCode().value(),
            exception.getReason(),
            LocalDateTime.now()
        );

        return ResponseEntity.status(exception.getStatusCode()).body(error);
    }

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<ErrorResponseDto> handleValidationException(MethodArgumentNotValidException exception){
    String message = exception.getBindingResult().getFieldErrors().stream()
        .map(error -> error.getField() + ": " + error.getDefaultMessage())
        .collect(Collectors.joining(", "));

    ErrorResponseDto error = new ErrorResponseDto(400 , message, LocalDateTime.now());

    return ResponseEntity.badRequest().body(error);
    }
}