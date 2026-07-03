package bo.edu.potosi.ssu.backend.config;

import bo.edu.potosi.ssu.backend.model.MensajeError;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<MensajeError> manejarError(RuntimeException ex) {
        return ResponseEntity.badRequest().body(new MensajeError(ex.getMessage()));
    }
}
