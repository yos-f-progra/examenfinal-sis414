package bo.edu.potosi.ssu.backend.model;

import lombok.Data;

@Data
public class ContactoRequest {
    private String nombre;
    private String email;
    private String mensaje;
}
