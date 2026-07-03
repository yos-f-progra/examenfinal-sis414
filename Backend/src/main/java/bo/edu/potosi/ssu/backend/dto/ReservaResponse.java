package bo.edu.potosi.ssu.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
public class ReservaResponse {
    private Long id;
    private Long especialidadId;
    private String especialidadNombre;
    private LocalDate fecha;
    private LocalTime hora;
}
