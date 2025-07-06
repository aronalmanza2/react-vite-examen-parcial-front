const TablaAlumnos = (props) => {
  const { alumnos, editarAlumno, eliminarAlumnoLogico, restaurarAlumnoLogico } =
    props;

  return (
    <div className="col-md-12">
      <table className="table table-bordered table-hover align-middle">
        <thead className="table-dark text-center">
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Nombres</th>
            <th>DNI</th>
            <th>Celular</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {alumnos.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No hay alumnos para mostrar.
              </td>
            </tr>
          ) : (
            alumnos.map((alumno, index) => (
              <tr key={alumno.id}>
                <td>{index + 1}</td>
                <td>{alumno.id}</td>
                <td>{alumno.nombres}</td>
                <td>{alumno.dni}</td>
                <td>{alumno.celular}</td>
                <td>{alumno.estado}</td>
                <td>
                  {alumno.estado === 1 && (
                    <>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => editarAlumno(alumno)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => eliminarAlumnoLogico(alumno)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </>
                  )}
                  {alumno.estado === 0 && (
                    <>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => restaurarAlumnoLogico(alumno)}
                      >
                        <i className="bi bi-arrow-counterclockwise"></i>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaAlumnos;
