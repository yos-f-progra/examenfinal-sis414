package bo.edu.potosi.ssu.backend.model;

import lombok.Data;

@Data
public class RegisterRequest {
    private String correo;
    private String nombreCompleto;
    private String contrasena;
}
