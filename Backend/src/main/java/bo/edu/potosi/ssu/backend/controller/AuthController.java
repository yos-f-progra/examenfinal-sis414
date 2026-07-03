package bo.edu.potosi.ssu.backend.controller;

import bo.edu.potosi.ssu.backend.model.AuthResponse;
import bo.edu.potosi.ssu.backend.model.LoginRequest;
import bo.edu.potosi.ssu.backend.model.RegisterRequest;
import bo.edu.potosi.ssu.backend.entity.Usuario;
import bo.edu.potosi.ssu.backend.repository.UsuarioRepository;
import bo.edu.potosi.ssu.backend.security.JwtUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Autenticación", description = "Registro e inicio de sesión de usuarios")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthController(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Operation(summary = "Registrar usuario", description = "Crea una cuenta nueva y devuelve un token JWT.")
    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest req) {
        if (usuarioRepository.existsByCorreo(req.getCorreo())) {
            throw new RuntimeException("Ese correo ya está registrado");
        }

        Usuario u = new Usuario();
        u.setCorreo(req.getCorreo());
        u.setNombreCompleto(req.getNombreCompleto());
        u.setContrasena(passwordEncoder.encode(req.getContrasena()));
        usuarioRepository.save(u);

        String token = jwtUtil.generarToken(u.getCorreo());
        return new AuthResponse(token, u.getCorreo());
    }

    @Operation(summary = "Iniciar sesión", description = "Valida credenciales y devuelve un token JWT.")
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest req) {
        Usuario u = usuarioRepository.findByCorreo(req.getCorreo())
                .orElseThrow(() -> new RuntimeException("Correo o contraseña incorrectos"));

        if (!passwordEncoder.matches(req.getContrasena(), u.getContrasena())) {
            throw new RuntimeException("Correo o contraseña incorrectos");
        }

        String token = jwtUtil.generarToken(u.getCorreo());
        return new AuthResponse(token, u.getCorreo());
    }
}
