import React, { useContext, useState } from "react";
import style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { StateContext } from "context/StateProvider";
import { Button } from "components";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { signOutUser, user } = useContext(StateContext);
  const [toggle, setToggle] = useState(false);

  const handleSignIOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };

  const isResponsive = () => {
    setToggle(!toggle);
  };

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1>Nails</h1>
      </div>
      <nav>
        <ul className={toggle ? style.navbarActive : style.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">Agenda</a>
          </li>
          <li>
            <a href="">Caja</a>
          </li>
          <li>
            <a href="">Clientas</a>
          </li>
        </ul>
      </nav>

      <Button type="button" onClick={handleSignIOut}>
        {user ? "Cerrar Sesion" : <NavLink to="/login">Login</NavLink>}
      </Button>
      <div onClick={isResponsive} className={style.icon}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Header;
