package bo.edu.potosi.ssu.backend.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class ReservaRequest {
    private Long especialidadId;
    private LocalDate fecha;
    private LocalTime hora;
}
