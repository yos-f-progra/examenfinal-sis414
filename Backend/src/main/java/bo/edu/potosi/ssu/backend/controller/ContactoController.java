package bo.edu.potosi.ssu.backend.controller;

import bo.edu.potosi.ssu.backend.model.ContactoRequest;
import bo.edu.potosi.ssu.backend.entity.Mensaje;
import bo.edu.potosi.ssu.backend.repository.MensajeRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Contacto", description = "Envío y consulta de mensajes del formulario de contacto")
@RestController
@RequestMapping("/api/contacto")
public class ContactoController {

    private final MensajeRepository mensajeRepository;

    public ContactoController(MensajeRepository mensajeRepository) {
        this.mensajeRepository = mensajeRepository;
    }

    @Operation(summary = "Enviar mensaje de contacto", description = "Registra un mensaje enviado desde el formulario de contacto público.")
    @PostMapping
    public Mensaje enviar(@RequestBody ContactoRequest req) {
        Mensaje m = new Mensaje();
        m.setNombre(req.getNombre());
        m.setEmail(req.getEmail());
        m.setMensaje(req.getMensaje());
        return mensajeRepository.save(m);
    }

    @Operation(summary = "Listar mensajes de contacto", description = "Devuelve todos los mensajes recibidos por el formulario de contacto (uso administrativo).")
    @GetMapping
    public List<Mensaje> listar() {
        return mensajeRepository.findAll();
    }
}
