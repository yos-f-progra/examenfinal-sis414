package bo.edu.potosi.ssu.backend.controller;

import bo.edu.potosi.ssu.backend.dto.ContactoRequest;
import bo.edu.potosi.ssu.backend.entity.Mensaje;
import bo.edu.potosi.ssu.backend.repository.MensajeRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacto")
public class ContactoController {

    private final MensajeRepository mensajeRepository;

    public ContactoController(MensajeRepository mensajeRepository) {
        this.mensajeRepository = mensajeRepository;
    }

    @PostMapping
    public Mensaje enviar(@RequestBody ContactoRequest req) {
        Mensaje m = new Mensaje();
        m.setNombre(req.getNombre());
        m.setEmail(req.getEmail());
        m.setMensaje(req.getMensaje());
        return mensajeRepository.save(m);
    }
}
