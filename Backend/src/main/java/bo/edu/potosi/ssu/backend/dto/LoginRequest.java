package bo.edu.potosi.ssu.backend.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String usuario;
    private String contrasena;
}
