package personas.back.service;

import personas.back.modelo.persona;
import personas.back.repository.personaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class personaService {

    @Autowired
    private personaRepository repository;

    // Método para crear una nueva entidad
    public persona crearEntidad(String nombre) {
        persona entidad = new persona();
        entidad.setNombre(nombre);
        return repository.save(entidad);
    }

    // Método para eliminar una entidad por ID
    public void eliminarEntidad(Long id) {
        repository.deleteById(id);
    }

    public List<persona> obtenerTodasLasEntidades() {
        return repository.findAll();
    }
}