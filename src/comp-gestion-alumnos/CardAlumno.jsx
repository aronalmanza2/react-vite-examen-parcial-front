const estadoConfig = {
  0: {
    color: "danger",
    nombre: "Inactivo",
  },
  1: {
    color: "success",
    nombre: "Activo",
  },
  99: {
    color: "secondary",
    nombre: "Desconocido",
  },
};

const CardAlumno = (props) => {
  const { alumno, editarAlumno, eliminarAlumnoLogico, restaurarAlumnoLogico } =
    props;
  const { color, nombre } = estadoConfig[alumno.estado] || estadoConfig[99];

  return (
    <div className="col-md-3 col-sm-12">
      <div className="card shadow-sm border-0 h-100">
        <div className="card-header bg-dark text-white d-flex align-items-center">
          <i className="bi bi-person-circle me-2 fs-4"></i>
          <h5 className="mb-0">{alumno.nombres}</h5>
        </div>
        <div className="card-body text-start">
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <i className="bi bi-1-circle me-2 text-primary"></i>
              <strong>ID:</strong> {alumno.id}
            </li>
            <li className="mb-2">
              <i className="bi bi-credit-card-2-front me-2 text-info"></i>
              <strong>DNI:</strong> {alumno.dni}
            </li>
            <li className="mb-2">
              <i className="bi bi-phone me-2 text-success"></i>
              <strong>Celular:</strong> {alumno.celular}
            </li>
            <li className="mb-2">
              <i className="bi bi-bell-fill me-2 text-warning"></i>
              <strong>Estado:</strong>{" "}
              <span className={`badge bg-${color}`}>{nombre}</span>
            </li>
          </ul>
        </div>
        <div className="card-footer d-flex justify-content-center">
          {alumno.estado === 1 && (
            <>
              <button
                className="btn btn-primary btn-sm mx-2"
                onClick={() => editarAlumno(alumno)}
              >
                <i className="bi bi-pencil-square me-2"></i> Editar
              </button>
              <button
                className="btn btn-danger mx-2 btn-sm"
                onClick={() => eliminarAlumnoLogico(alumno)}
              >
                <i className="bi bi-trash me-2"></i> Eliminar
              </button>
            </>
          )}

          {alumno.estado === 0 && (
            <>
              <button
                className="btn btn-warning mx-2 btn-sm"
                onClick={() => restaurarAlumnoLogico(alumno)}
              >
                <i className="bi bi-arrow-counterclockwise me-2"></i> Restaurar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardAlumno;
