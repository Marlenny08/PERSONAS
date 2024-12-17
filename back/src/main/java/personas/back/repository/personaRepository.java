package personas.back.repository;

import personas.back.modelo.persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface personaRepository extends JpaRepository<persona, Long> {
}
