import { proyectos } from "./data";

const estadoConfig = {
  no_iniciado: {
    color: "danger",
    icono: "bi bi-hourglass-split",
    titulo: "Tareas No Iniciadas",
  },
  en_proceso: {
    color: "primary",
    icono: "bi bi-arrow-repeat",
    titulo: "Tareas En Proceso",
  },
  finalizado: {
    color: "success",
    icono: "bi bi-check-circle",
    titulo: "Tareas Finalizadas",
  },
  desconocido: {
    color: "secondary",
    icono: "bi bi-question-circle",
    titulo: "Tareas Desconocidas",
  },
};

const filtrarTareasEstado = (proyectos, estado) => {
  const tareasFiltradas = [];

  proyectos.forEach((proyecto) => {

    const { id: proyectoId, nombre: proyectoNombre } = proyecto;

    // Filtrar tareas | estado
    const tareasPorProyecto = proyecto.tareas.filter((tarea) => {
      switch (estado) {
        case "no_iniciado":
          return tarea.avance === 0;
        case "en_proceso":
          return tarea.avance > 0 && tarea.avance < 100;
        case "finalizado":
          return tarea.avance === 100;
        default:
          // Devuelve todas las tareas de proyecto.
          return true;
      }
    });

    // Agregar info proyecto (id, nombre) a tareasPorProyecto
    const tareasConProyecto = tareasPorProyecto.map((tarea) => ({
      ...tarea,
      proyecto: {
        id: proyectoId,
        nombre: proyectoNombre,
      },
    }));

    tareasFiltradas.push(...tareasConProyecto);
  });

  return tareasFiltradas;
};

const CardAvanceProyecto = (props) => {
  const { estado } = props;
  const { color, icono, titulo } =
    estadoConfig[estado] || estadoConfig.desconocido;

  const tareasFiltradas = filtrarTareasEstado(proyectos, estado);
  console.log(tareasFiltradas);

  return (
    <div className="col-md-4 col-sm-12">
      <div className="card text-center">
        <div className={`card-header bg-${color} text-white fs-4`}>
          <i className={`${icono} me-2`}></i> {titulo}
        </div>
        <div className="card-body p-3">
          {tareasFiltradas.length > 0 ? (
            tareasFiltradas.map((tarea, index) => (
              <div key={index} className={`alert alert-${color}`}>
                {/* Fila de IDs */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-secondary rounded">
                    PY-ID: {tarea.proyecto.id}
                  </span>
                  <span className="badge bg-dark rounded">
                    TR-ID: {tarea.id}
                  </span>
                </div>

                {/* Nombre Proyecto */}
                <p className="lead fs-6 m-0 text-uppercase fw-bold">
                  {tarea.proyecto.nombre}
                </p>

                <hr className="my-1" />

                {/* Nombre y Dificultad Tarea */}
                <p className="mb-2 fw-semibold">{tarea.nombre}</p>
                <p className="mb-2 text-muted">
                  Dificultad: <strong>{tarea.dificultad}</strong>
                </p>

                {/* Barra Progreso */}
                <div className="progress mt-2">
                  <div
                    className={`progress-bar progress-bar-striped bg-${color}`}
                    style={{
                      width: `${tarea.avance}%`,
                      minWidth: tarea.avance === 0 ? "30px" : "auto",
                    }}
                    aria-valuenow={tarea.avance}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {tarea.avance}%
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="card-text text-center text-muted mb-0">
              No hay tareas disponibles
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardAvanceProyecto;
