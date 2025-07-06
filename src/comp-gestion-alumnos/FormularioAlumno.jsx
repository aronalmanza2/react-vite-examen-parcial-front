import axios from "axios";

const FormularioAlumno = (props) => {
  
  const { api, form, setForm, modoEdicion, setModoEdicion, obtenerAlumnos } =
    props;

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modoEdicion) {
        await axios.put(`${api}/${form.id}`, form);
      } else {
        await axios.post(api, form);
      }
      limpiarFormulario();
      obtenerAlumnos();
    } catch (error) {
      console.error(">> Error al enviar el formulario:", error);
    }
  };

  const manejarCambio = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const limpiarFormulario = () => {
    setForm({ id: null, nombres: "", dni: "", celular: "", estado: 1 });
    setModoEdicion(false);
  };

  return (
    <form className="card p-3 mb-3" onSubmit={manejarSubmit}>
      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="text"
            name="nombres"
            value={form.nombres}
            onChange={manejarCambio}
            className="form-control"
            placeholder="Nombres"
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="dni"
            value={form.dni}
            onChange={manejarCambio}
            className="form-control"
            placeholder="DNI"
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="celular"
            value={form.celular}
            onChange={manejarCambio}
            className="form-control"
            placeholder="Celular"
          />
        </div>
        <div className="col-md-2">
          <button
            type="submit"
            className={`btn btn-${modoEdicion ? "warning" : "success"} w-100`}
          >
            {modoEdicion ? "Actualizar" : "Registrar"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormularioAlumno;
