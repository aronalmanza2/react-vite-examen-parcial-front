import CardAvanceProyecto from "./CardAvanceProyecto";

const TableroKanban = () => {
  return (
    <section>
      <div className="alert alert-secondary text-center">
        <h1>TableroKanban</h1>
      </div>
      <div className="alert alert-secondary">
        <div className="row gy-3">
          <CardAvanceProyecto estado="no_iniciado" />
          <CardAvanceProyecto estado="en_proceso" />
          <CardAvanceProyecto estado="finalizado" />
        </div>
      </div>
    </section>
  );
};

export default TableroKanban;
