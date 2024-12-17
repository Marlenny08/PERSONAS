// import { useEffect, useState } from "react";
// import axios from "axios";
// import EntityForm from "./components/entityForm";
// import EntityList from "./components/entityList";

// function App() {
//   const [entidades, setEntidades] = useState([]);

//   useEffect(() => {
//     const fetchEntidades = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/entidades");
//         setEntidades(response.data);
//       } catch (error) {
//         console.error("Error al obtener las entidades:", error);
//       }
//     };

//     fetchEntidades();
//   }, []);

//   const handleAdd = (nuevaEntidad) => {
//     setEntidades([...entidades, nuevaEntidad]);
//   };

//   const handleDelete = (id) => {
//     setEntidades(entidades.filter((entidad) => entidad.id !== id));
//   };

//   return (
//     <div>
//       <h1>Gestión de Entidades</h1>
//       <EntityForm onAdd={handleAdd} />
//       <EntityList entidades={entidades} onDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;





import { useEffect, useState } from "react";
import axios from "axios";
import EntityForm from "./components/EntityForm";
import EntityList from "./components/EntityList";

function App() {
    const [entidades, setEntidades] = useState([]);
    const [entidadParaEditar, setEntidadParaEditar] = useState(null);

    useEffect(() => {
        const fetchEntidades = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/entidades");
                setEntidades(response.data);
            } catch (error) {
                console.error("Error al obtener las entidades:", error);
            }
        };

        fetchEntidades();
    }, []);

    const handleAdd = (nuevaEntidad) => {
        setEntidades([...entidades, nuevaEntidad]);
    };

    const handleDelete = (id) => {
        setEntidades(entidades.filter((entidad) => entidad.id !== id));
    };

    const handleUpdate = (entidadActualizada) => {
        setEntidades(
            entidades.map((entidad) =>
                entidad.id === entidadActualizada.id ? entidadActualizada : entidad
            )
        );
        setEntidadParaEditar(null);
    };

    const handleEdit = (entidad) => {
        setEntidadParaEditar(entidad);
    };

    return (
        <div>
            <h1>Gestión de Personas</h1>
            <EntityForm
                onAdd={handleAdd}
                onUpdate={handleUpdate}
                entidadParaEditar={entidadParaEditar}
            />
            <EntityList entidades={entidades} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
}

export default App;
