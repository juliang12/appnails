import React, { useContext } from "react";
import style from "./Home.module.css";
import { StateContext } from "context/StateProvider";
import AnimateLogo from "components/common/animateLogo/AnimateLogo";

const Home = () => {
  const { stateApp } = useContext(StateContext);
  const { user } = stateApp;

  return (
    <div className={style.container}>
      <h2>Bienvenid@ {user?.email}</h2>
      <div className={style.containerLogo}>
        <AnimateLogo />
      </div>
    </div>
  );
};

export default Home;
