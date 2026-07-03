package bo.edu.potosi.ssu.backend.config;

import bo.edu.potosi.ssu.backend.entity.Especialidad;
import bo.edu.potosi.ssu.backend.repository.EspecialidadRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final EspecialidadRepository especialidadRepository;

    public DataSeeder(EspecialidadRepository especialidadRepository) {
        this.especialidadRepository = especialidadRepository;
    }

    @Override
    public void run(String... args) {
        if (especialidadRepository.count() > 0) {
            return;
        }

        guardar("Consulta Externa", "Atención médica general para asegurados");
        guardar("Laboratorio Clínico", "Análisis clínicos y de diagnóstico");
        guardar("Imagenología", "Estudios de radiografía e imágenes médicas");
        guardar("Enfermería", "Cuidados y atención de enfermería");
        guardar("Farmacia", "Dispensación de medicamentos a asegurados");
        guardar("Fisioterapia", "Rehabilitación y terapia física");
        guardar("Ecografía", "Estudios ecográficos");
        guardar("Internación Clínica y Quirúrgica", "Internación y procedimientos quirúrgicos");
        guardar("Afiliaciones", "Trámites de afiliación al seguro");
    }

    private void guardar(String nombre, String descripcion) {
        Especialidad especialidad = new Especialidad();
        especialidad.setNombre(nombre);
        especialidad.setDescripcion(descripcion);
        especialidadRepository.save(especialidad);
    }
}
