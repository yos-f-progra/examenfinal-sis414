package bo.edu.potosi.ssu.backend.controller;

import bo.edu.potosi.ssu.backend.entity.Especialidad;
import bo.edu.potosi.ssu.backend.repository.EspecialidadRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Especialidades", description = "Consulta de especialidades médicas disponibles")
@RestController
@RequestMapping("/api/especialidades")
public class EspecialidadController {

    private final EspecialidadRepository especialidadRepository;

    public EspecialidadController(EspecialidadRepository especialidadRepository) {
        this.especialidadRepository = especialidadRepository;
    }

    @Operation(summary = "Listar especialidades", description = "Devuelve todas las especialidades médicas registradas.")
    @GetMapping
    public List<Especialidad> listar() {
        return especialidadRepository.findAll();
    }
}
