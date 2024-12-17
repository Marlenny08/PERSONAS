const EntityList = ({ entidades, onDelete, onEdit }) => {
    return (
        <div>
            <h2>Lista de Personas</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {entidades.length > 0 ? (
                        entidades.map((entidad) => (
                            <tr key={entidad.id}>
                                <td>{entidad.id}</td>
                                <td>{entidad.nombre}</td>
                                <td>
                                    <button onClick={() => onEdit(entidad)}>Editar</button>
                                    <button onClick={() => onDelete(entidad.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No hay entidades disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EntityList;
