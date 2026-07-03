package bo.edu.potosi.ssu.backend.controller;

import bo.edu.potosi.ssu.backend.model.UsuarioResponse;
import bo.edu.potosi.ssu.backend.model.UsuarioUpdateRequest;
import bo.edu.potosi.ssu.backend.entity.Usuario;
import bo.edu.potosi.ssu.backend.repository.UsuarioRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Usuarios", description = "Gestión de usuarios registrados (no expuesto en la interfaz web, solo administrativo)")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;

    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Operation(summary = "Listar usuarios", description = "Devuelve todos los usuarios registrados en el sistema, sin exponer la contraseña.")
    @GetMapping
    public List<UsuarioResponse> listar() {
        return usuarioRepository.findAll().stream()
                .map(u -> new UsuarioResponse(u.getId(), u.getUsuario(), u.getNombreCompleto()))
                .toList();
    }

    @Operation(summary = "Obtener un usuario", description = "Devuelve los datos de un usuario específico por su id.")
    @GetMapping("/{id}")
    public UsuarioResponse obtener(@Parameter(description = "Id del usuario") @PathVariable Long id) {
        Usuario u = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        return new UsuarioResponse(u.getId(), u.getUsuario(), u.getNombreCompleto());
    }

    @Operation(summary = "Actualizar un usuario", description = "Actualiza el nombre completo de un usuario existente.")
    @PutMapping("/{id}")
    public UsuarioResponse actualizar(@Parameter(description = "Id del usuario") @PathVariable Long id,
                                       @RequestBody UsuarioUpdateRequest req) {
        Usuario u = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        u.setNombreCompleto(req.getNombreCompleto());
        usuarioRepository.save(u);

        return new UsuarioResponse(u.getId(), u.getUsuario(), u.getNombreCompleto());
    }

    @Operation(summary = "Eliminar un usuario", description = "Elimina permanentemente un usuario del sistema.")
    @DeleteMapping("/{id}")
    public void eliminar(@Parameter(description = "Id del usuario") @PathVariable Long id) {
        usuarioRepository.deleteById(id);
    }
}
