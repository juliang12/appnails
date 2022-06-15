import React, { useContext } from "react";
import style from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { StateContext } from "context/StateProvider";
import { Button } from "components";

const Header = () => {
  const { signOutUser, user } = useContext(StateContext);

  const handleSignIOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.code);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1>Nails</h1>
      </div>
      <nav>
        <ul className={style.navbar}>
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
      {user ? user.email : "Hola Anonim@"}
      <Button type="button" onClick={handleSignIOut}>
        {user ? "Cerrar Sesion" : <NavLink to="/login">Login</NavLink>}
      </Button>
    </div>
  );
};

export default Header;
