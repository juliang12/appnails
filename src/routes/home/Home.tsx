import { useContext } from "react";
import style from "./Home.module.css";
import { StateContext } from "context/StateProvider";
import { TodoContextProps } from "models/state.model";
import { AnimateLogo } from "components";

const Home = () => {
  const { stateApp } = useContext(StateContext) as TodoContextProps;
  const { user } = stateApp;
  console.log(user);
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
