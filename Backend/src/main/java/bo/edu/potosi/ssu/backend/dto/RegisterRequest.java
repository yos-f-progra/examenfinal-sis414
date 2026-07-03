package bo.edu.potosi.ssu.backend.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String usuario;
    private String nombreCompleto;
    private String contrasena;
}
