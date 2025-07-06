const Pregunta = (props) => {
  const { pregunta, idAcordion } = props;
  const { id, numeracion, titulo, respuestaCorrecta, justificacion } = pregunta;

  return (
    <div className="card mb-3 border-0 shadow-sm rounded-3">
      <div className="card-header bg-white" id={`heading${id}`}>
        <h2 className="mb-0">
          <button
            className="collapsed btn btn-link btn-block text-start d-flex justify-content-between align-items-center w-100 text-decoration-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#respuesta${id}`}
            aria-expanded="false"
            aria-controls={`respuesta${id}`}
          >
            <span className="fw-bold">
              {numeracion}) {titulo}
            </span>
            <span
              className={`d-flex align-items-center ${
                respuestaCorrecta ? "text-success" : "text-danger"
              }`}
            >
              <i
                className={`bi ${
                  respuestaCorrecta
                    ? "bi-check-circle-fill"
                    : "bi-x-circle-fill"
                } me-1`}
              ></i>
              {respuestaCorrecta ? "Verdadero" : "Falso"}
            </span>
          </button>
        </h2>
      </div>

      <div
        id={`respuesta${id}`}
        className="collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent={`#${idAcordion}`}
      >
        <div className="card-body">
          <p className="mb-0">{justificacion}</p>
        </div>
      </div>
    </div>
  );
};

export default Pregunta;
