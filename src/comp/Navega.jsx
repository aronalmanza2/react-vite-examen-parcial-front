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
                    Inicio
                  </NavLink>
                </li>

                {/* Cuestionario */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="cuestionario">
                    Cuestionario
                  </NavLink>
                </li>

                {/* Numeros Primos */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="numeros-primos">
                    Numeros Primos
                  </NavLink>
                </li>

                {/* Tablero Kanban */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="tablero-kanban">
                    Tablero Kanban
                  </NavLink>
                </li>

                {/* Gestion Alumnos */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="gestion-alumnos">
                    Gestion Alumnos
                  </NavLink>
                </li>

                {/* Ejemplo - Submenu */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
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
