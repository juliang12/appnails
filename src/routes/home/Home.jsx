import React, { useContext } from "react";
import style from "./Home.module.css";
import Logo from "../../assets/logo.png";
import { StateContext } from "context/StateProvider";

const Home = () => {
  const { stateApp } = useContext(StateContext);
  const { user } = stateApp;

  return (
    <div className={style.container}>
      <h2>Bienvenid@ {user?.email}</h2>
      <img className={style.logo} src={Logo} alt="" />
    </div>
  );
};

export default Home;
