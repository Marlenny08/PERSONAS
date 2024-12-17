package personas.back.controller;

import personas.back.modelo.persona;
import personas.back.service.personaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entidades")
@CrossOrigin(origins = "http://localhost:5173")

public class personaController {

    @Autowired
    private personaService service;
    @Autowired
    private personas.back.repository.personaRepository personaRepository;

    // Endpoint para crear una nueva entidad
    @PostMapping
    public persona crearEntidad(@RequestBody persona entidad) {
        return service.crearEntidad(entidad.getNombre());
    }

    // Endpoint para eliminar una entidad por ID
    @DeleteMapping("/{id}")
    public String eliminarEntidad(@PathVariable Long id) {
        service.eliminarEntidad(id);
        return "Entidad con ID " + id + " eliminada correctamente.";
    }

    @GetMapping
    public List<persona> obtenerTodasLasEntidades() {
        return service.obtenerTodasLasEntidades();
    }

    @PutMapping("/{id}")
    public persona update(@PathVariable Long id, @RequestBody persona updatedEntity) {
        return personaRepository.findById(id).map(entity -> {
            entity.setNombre(updatedEntity.getNombre());
            return personaRepository.save(entity);
        }).orElseThrow(() -> new RuntimeException("Entidad no encontrada con id " + id));
    }
}