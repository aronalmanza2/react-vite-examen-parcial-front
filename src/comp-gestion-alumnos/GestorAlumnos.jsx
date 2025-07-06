import axios from "axios";
import CardAlumno from "./CardAlumno";
import TablaAlumnos from "./TablaAlumnos";

const GestorAlumnos = (props) => {
  const {
    api,
    activo,
    vistaTabla,
    setForm,
    setModoEdicion,
    alumnos = [],
    obtenerAlumnos,
  } = props;

  const eliminarAlumnoLogico = async (alumno) => {
    if (
      window.confirm(
        `¿Eliminar al ALUMNO: ${alumno.nombres} con DNI: ${alumno.dni}?`
      )
    ) {
      await axios.patch(`${api}/${alumno.id}`, { estado: 0 });
      obtenerAlumnos();
    }
  };

  const restaurarAlumnoLogico = async (alumno) => {
    if (
      window.confirm(
        `¿Restaurar al ALUMNO: ${alumno.nombres} con DNI: ${alumno.dni}?`
      )
    ) {
      await axios.patch(`${api}/${alumno.id}`, { estado: 1 });
      obtenerAlumnos();
    }
  };

  const alumnosFiltrados = alumnos.filter((a) => a.estado === (activo ? 1 : 0));

  return (
    <div className="row gy-3">
      {vistaTabla ? (
        <TablaAlumnos
          alumnos={alumnosFiltrados}
          editarAlumno={(a) => {
            setForm(a);
            setModoEdicion(true);
          }}
          eliminarAlumnoLogico={eliminarAlumnoLogico}
          restaurarAlumnoLogico={restaurarAlumnoLogico}
        />
      ) : (
        alumnosFiltrados.map((alumno) => (
          <CardAlumno
            key={alumno.id}
            alumno={alumno}
            editarAlumno={(a) => {
              setForm(a);
              setModoEdicion(true);
            }}
            eliminarAlumnoLogico={eliminarAlumnoLogico}
            restaurarAlumnoLogico={restaurarAlumnoLogico}
          />
        ))
      )}
    </div>
  );
};

export default GestorAlumnos;
