package bo.edu.potosi.ssu.backend.model;

import lombok.Data;

@Data
public class RegisterRequest {
    private String usuario;
    private String nombreCompleto;
    private String contrasena;
}
