import { preguntas } from "./data";
import Pregunta from "./Pregunta";

const Cuestionario = () => {
  return (
    <section>
      <div className="alert alert-secondary text-center">
        <h1>Cuestionario</h1>
      </div>
      <div className="alert alert-secondary">
        <h3 className="mb-4">
          1. Indicar si es (V) o (F) los siguientes enunciados, justifique
          brevemente.
        </h3>

        <div className="accordion" id="cuestionarioAccordion">
          {preguntas.map((pregunta) => (
            <Pregunta
              key={pregunta.id}
              pregunta={pregunta}
              idAcordion="cuestionarioAccordion"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cuestionario;
