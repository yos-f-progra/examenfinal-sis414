package bo.edu.potosi.ssu.backend.controller;

import bo.edu.potosi.ssu.backend.dto.ReservaRequest;
import bo.edu.potosi.ssu.backend.dto.ReservaResponse;
import bo.edu.potosi.ssu.backend.entity.Especialidad;
import bo.edu.potosi.ssu.backend.entity.Reserva;
import bo.edu.potosi.ssu.backend.entity.Usuario;
import bo.edu.potosi.ssu.backend.repository.EspecialidadRepository;
import bo.edu.potosi.ssu.backend.repository.ReservaRepository;
import bo.edu.potosi.ssu.backend.repository.UsuarioRepository;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservas")
public class ReservaController {

    private final ReservaRepository reservaRepository;
    private final UsuarioRepository usuarioRepository;
    private final EspecialidadRepository especialidadRepository;

    public ReservaController(ReservaRepository reservaRepository, UsuarioRepository usuarioRepository,
                              EspecialidadRepository especialidadRepository) {
        this.reservaRepository = reservaRepository;
        this.usuarioRepository = usuarioRepository;
        this.especialidadRepository = especialidadRepository;
    }

    @GetMapping
    public List<ReservaResponse> misReservas(Authentication auth) {
        Usuario usuario = usuarioRepository.findByUsuario(auth.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        return reservaRepository.findByUsuario(usuario).stream()
                .map(r -> new ReservaResponse(r.getId(), r.getEspecialidad().getId(), r.getEspecialidad().getNombre(), r.getFecha(), r.getHora()))
                .toList();
    }

    @PostMapping
    public ReservaResponse crear(@RequestBody ReservaRequest req, Authentication auth) {
        Usuario usuario = usuarioRepository.findByUsuario(auth.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Especialidad especialidad = especialidadRepository.findById(req.getEspecialidadId())
                .orElseThrow(() -> new RuntimeException("Especialidad no encontrada"));

        Reserva r = new Reserva();
        r.setUsuario(usuario);
        r.setEspecialidad(especialidad);
        r.setFecha(req.getFecha());
        r.setHora(req.getHora());
        reservaRepository.save(r);

        return new ReservaResponse(r.getId(), especialidad.getId(), especialidad.getNombre(), r.getFecha(), r.getHora());
    }

    @PutMapping("/{id}")
    public ReservaResponse reprogramar(@PathVariable Long id, @RequestBody ReservaRequest req, Authentication auth) {
        Reserva r = reservaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reserva no encontrada"));

        if (!r.getUsuario().getUsuario().equals(auth.getName())) {
            throw new RuntimeException("No puede modificar una reserva que no es suya");
        }

        Especialidad especialidad = especialidadRepository.findById(req.getEspecialidadId())
                .orElseThrow(() -> new RuntimeException("Especialidad no encontrada"));

        r.setEspecialidad(especialidad);
        r.setFecha(req.getFecha());
        r.setHora(req.getHora());
        reservaRepository.save(r);

        return new ReservaResponse(r.getId(), especialidad.getId(), especialidad.getNombre(), r.getFecha(), r.getHora());
    }

    @DeleteMapping("/{id}")
    public void cancelar(@PathVariable Long id, Authentication auth) {
        Reserva r = reservaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reserva no encontrada"));

        if (!r.getUsuario().getUsuario().equals(auth.getName())) {
            throw new RuntimeException("No puede cancelar una reserva que no es suya");
        }

        reservaRepository.delete(r);
    }
}
