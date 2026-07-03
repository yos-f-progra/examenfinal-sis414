package bo.edu.potosi.ssu.backend.repository;

import bo.edu.potosi.ssu.backend.entity.Mensaje;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MensajeRepository extends JpaRepository<Mensaje, Long> {
}
