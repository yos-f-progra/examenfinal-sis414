package bo.edu.potosi.ssu.backend.controller;

import bo.edu.potosi.ssu.backend.dto.AuthResponse;
import bo.edu.potosi.ssu.backend.dto.LoginRequest;
import bo.edu.potosi.ssu.backend.dto.RegisterRequest;
import bo.edu.potosi.ssu.backend.entity.Usuario;
import bo.edu.potosi.ssu.backend.repository.UsuarioRepository;
import bo.edu.potosi.ssu.backend.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest req) {
        if (usuarioRepository.existsByUsuario(req.getUsuario())) {
            throw new RuntimeException("Ese usuario ya está registrado");
        }

        Usuario u = new Usuario();
        u.setUsuario(req.getUsuario());
        u.setNombreCompleto(req.getNombreCompleto());
        u.setContrasena(passwordEncoder.encode(req.getContrasena()));
        usuarioRepository.save(u);

        String token = jwtUtil.generarToken(u.getUsuario());
        return new AuthResponse(token, u.getUsuario());
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest req) {
        Usuario u = usuarioRepository.findByUsuario(req.getUsuario())
                .orElseThrow(() -> new RuntimeException("Usuario o contraseña incorrectos"));

        if (!passwordEncoder.matches(req.getContrasena(), u.getContrasena())) {
            throw new RuntimeException("Usuario o contraseña incorrectos");
        }

        String token = jwtUtil.generarToken(u.getUsuario());
        return new AuthResponse(token, u.getUsuario());
    }
}
