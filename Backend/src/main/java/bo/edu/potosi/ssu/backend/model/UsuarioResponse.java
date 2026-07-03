package bo.edu.potosi.ssu.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UsuarioResponse {
    private Long id;
    private String correo;
    private String nombreCompleto;
}
