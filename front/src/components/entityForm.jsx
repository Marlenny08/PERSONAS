// import { useState } from "react";
// import axios from "axios";

// const EntityForm = ({ onAdd }) => {
//     const [nombre, setNombre] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!nombre.trim()) return alert("El campo 'nombre' es obligatorio.");

//         try {
//             const response = await axios.post("http://localhost:8080/api/entidades", { nombre });
//             onAdd(response.data);
//             setNombre("");
//         } catch (error) {
//             console.error("Error al crear la entidad:", error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={nombre}
//                 onChange={(e) => setNombre(e.target.value)}
//                 placeholder="Ingresa un nombre"
//                 required
//             />
//             <button type="submit">Agregar</button>
//         </form>
//     );
// };

// export default EntityForm;

import { useState, useEffect } from "react";
import axios from "axios";

const EntityForm = ({ onAdd, onUpdate, entidadParaEditar }) => {
    const [nombre, setNombre] = useState("");

    // Actualiza el campo cuando la entidad para editar cambia
    useEffect(() => {
        if (entidadParaEditar) {
            setNombre(entidadParaEditar.nombre);
        }
    }, [entidadParaEditar]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (entidadParaEditar) {
            // Editar entidad existente
            try {
                const response = await axios.put(
                    `http://localhost:8080/api/entidades/${entidadParaEditar.id}`,
                    { nombre }
                );
                onUpdate(response.data);
                setNombre("");
            } catch (error) {
                console.error("Error al actualizar la entidad:", error);
            }
        } else {
            // Crear nueva entidad
            try {
                const response = await axios.post("http://localhost:8080/api/entidades", {
                    nombre,
                });
                onAdd(response.data);
                setNombre("");
            } catch (error) {
                console.error("Error al crear la entidad:", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
                required
            />
            <button type="submit">{entidadParaEditar ? "Actualizar" : "Agregar"}</button>
        </form>
    );
};

export default EntityForm;




