import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/agenda">Agenda</NavLink>
      </li>
      <li>
        <NavLink to="/caja">Caja</NavLink>
      </li>
      <li>
        <NavLink to="/clientas">Clientas</NavLink>
      </li>
    </>
  );
};

export default Navigation;
