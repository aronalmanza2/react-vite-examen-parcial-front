import GestorAlumnos from "./GestorAlumnos";
import { useState, useEffect } from "react";
import axios from "axios";
import FormularioAlumno from "./FormularioAlumno";

const api = "http://localhost:5000/alumnos";

const GestionAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);

  const obtenerAlumnos = async () => {
    try {
      const resp = await axios.get(api);
      setAlumnos(resp.data);
    } catch (error) {
      console.error(">> Error al obtener alumnos:", error);
    }
  };

  useEffect(() => {
    obtenerAlumnos();
  }, []);

  const [form, setForm] = useState({
    id: null,
    nombres: "",
    dni: "",
    celular: "",
    estado: 1,
  });

  const [modoEdicion, setModoEdicion] = useState(false);

  return (
    <section>
      <div className="alert alert-secondary text-center">
        <h1>Gestión de Alumnos</h1>
      </div>

      <div className="alert alert-secondary">
        <h3 className="mb-3">Formulario</h3>
        <FormularioAlumno
          api={api}
          form={form}
          setForm={setForm}
          modoEdicion={modoEdicion}
          setModoEdicion={setModoEdicion}
          obtenerAlumnos={obtenerAlumnos}
        />
      </div>

      <div className="alert alert-secondary">
        <h3 className="mb-3">Alumnos Activos</h3>
        <GestorAlumnos
          api={api}
          activo={true}
          vistaTabla={false}
          setForm={setForm}
          setModoEdicion={setModoEdicion}
          alumnos={alumnos}
          obtenerAlumnos={obtenerAlumnos}
        />
      </div>

      <div className="alert alert-secondary">
        <h3 className="mb-3">Alumnos Inactivos Tabla</h3>
        <GestorAlumnos
          api={api}
          activo={false}
          vistaTabla={true}
          setForm={setForm}
          setModoEdicion={setModoEdicion}
          alumnos={alumnos}
          obtenerAlumnos={obtenerAlumnos}
        />
      </div>

      {/* <div className="alert alert-secondary">
        <h3 className="mb-3">Alumnos Inactivos</h3>
        <GestorAlumnos
          api={api}
          activo={false}
          vistaTabla={false}
          setForm={setForm}
          setModoEdicion={setModoEdicion}
          alumnos={alumnos}
          obtenerAlumnos={obtenerAlumnos}
        />
      </div> */}

      {/* <div className="alert alert-secondary">
        <h3 className="mb-3">Alumnos Activos Tabla</h3>
        <GestorAlumnos
          api={api}
          activo={true}
          vistaTabla={true}
          setForm={setForm}
          setModoEdicion={setModoEdicion}
          alumnos={alumnos}
          obtenerAlumnos={obtenerAlumnos}
        />
      </div> */}
    </section>
  );
};

export default GestionAlumnos;
