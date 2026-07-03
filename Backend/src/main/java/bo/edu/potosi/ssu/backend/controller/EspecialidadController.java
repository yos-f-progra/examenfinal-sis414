package bo.edu.potosi.ssu.backend.controller;

import bo.edu.potosi.ssu.backend.entity.Especialidad;
import bo.edu.potosi.ssu.backend.repository.EspecialidadRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/especialidades")
public class EspecialidadController {

    private final EspecialidadRepository especialidadRepository;

    public EspecialidadController(EspecialidadRepository especialidadRepository) {
        this.especialidadRepository = especialidadRepository;
    }

    @GetMapping
    public List<Especialidad> listar() {
        return especialidadRepository.findAll();
    }
}
