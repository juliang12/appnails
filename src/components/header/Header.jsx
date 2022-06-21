import React, { useState } from "react";
import style from "./Header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "components";
import { FaBars, FaTimes } from "react-icons/fa";
import useFirebase from "hooks/useFirebase";

const Header = () => {
  const { user, signOutUser } = useFirebase();
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
          {user && (
            <>
              <li>
                <Link to="/">Home</Link>
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
          )}
        </ul>
      </nav>
      {user ? (
        <Button type="button" onClick={handleSignIOut}>
          Cerrar Sesion
        </Button>
      ) : (
        <NavLink to="/login">
          <Button>Login</Button>
        </NavLink>
      )}

      <div onClick={isResponsive} className={style.icon}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Header;
