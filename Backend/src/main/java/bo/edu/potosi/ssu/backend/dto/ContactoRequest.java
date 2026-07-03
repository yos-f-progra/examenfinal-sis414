package bo.edu.potosi.ssu.backend.dto;

import lombok.Data;

@Data
public class ContactoRequest {
    private String nombre;
    private String email;
    private String mensaje;
}
