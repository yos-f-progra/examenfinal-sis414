package bo.edu.potosi.ssu.backend.model;

import lombok.Data;

@Data
public class LoginRequest {
    private String correo;
    private String contrasena;
}
