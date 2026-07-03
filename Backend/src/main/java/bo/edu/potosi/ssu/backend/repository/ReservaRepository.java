package bo.edu.potosi.ssu.backend.repository;

import bo.edu.potosi.ssu.backend.entity.Reserva;
import bo.edu.potosi.ssu.backend.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    List<Reserva> findByUsuario(Usuario usuario);
}
