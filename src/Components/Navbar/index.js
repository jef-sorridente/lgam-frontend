import "./navbar.css";
import logo from "../../Img/logo100x93.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo LGAM" />
        <h2>Liga Gaúcha de Artes Marciais</h2>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/afiliados"
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Afiliados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/eventos"
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/galeria"
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ranking"
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Ranking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) => (isActive ? "active" : "no-active")}
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
