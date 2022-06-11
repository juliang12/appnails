import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1>Nails</h1>
      </div>
      <nav>
        <ul className={style.navbar}>
          <li>
            <a href="">Home</a>
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
    </div>
  );
};

export default Header;
