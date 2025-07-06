import reactLogo from "../assets/react.svg";
import { NavLink, Route, Routes } from "react-router-dom";

import Cuestionario from "../comp-cuestionario/Cuestionaro";
import Inicio from "./Inicio";
import NumerosPrimos from "../comp-numeros-primos/NumerosPrimos";
import TableroKanban from "../comp-tablero-kanban/TableroKanban";
import GestionAlumnos from "../comp-gestion-alumnos/GestionAlumnos";
import Error from "./Error";

const Navega = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            {/* Logo */}
            <NavLink className="navbar-brand" to="inicio">
              <img
                src={reactLogo}
                className="img-fluid"
                width="36"
                alt="React logo"
              />
            </NavLink>

            {/* Boton pantalla telefono */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {/* Inicio */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="inicio">
                    <i className="bi bi-house-door-fill me-1"></i> Inicio
                  </NavLink>
                </li>

                {/* Cuestionario */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="cuestionario">
                    <i className="bi bi-question-square-fill"></i> Cuestionario
                  </NavLink>
                </li>

                {/* Numeros Primos */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="numeros-primos">
                    <i className="bi bi-7-square-fill me-1"></i> Numeros Primos
                  </NavLink>
                </li>

                {/* Tablero Kanban */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="tablero-kanban">
                    <i className="bi bi-columns-gap me-1"></i> Tablero Kanban
                  </NavLink>
                </li>

                {/* Gestion Alumnos */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="gestion-alumnos">
                    <i className="bi bi-person-lines-fill me-1"></i> Gestion
                    Alumnos
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Rutas */}
      <main className="container-fluid my-3">
        <Routes>
          <Route path="inicio" element={<Inicio />} />
          <Route path="cuestionario" element={<Cuestionario />} />
          <Route path="numeros-primos" element={<NumerosPrimos />} />
          <Route path="tablero-kanban" element={<TableroKanban />} />
          <Route path="gestion-alumnos" element={<GestionAlumnos />} />

          {/* Ruta por defecto */}
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
};

export default Navega;
