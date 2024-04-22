import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/CD.jpg";

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand wid" to="/">
            <img src={miLogo} alt="El logo"style={{ width: "100%", height: "30px" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cancioncre">
                  Cancion
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/acer">
                  Acerca de...
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
