package bo.edu.potosi.ssu.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "mensajes_contacto")
@Data
public class Mensaje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String email;

    private String mensaje;
}
