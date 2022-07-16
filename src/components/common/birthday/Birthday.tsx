import { StateContext } from "context/StateProvider";
import { useContext } from "react";
import { TodoContextProps } from "models/state.model";
import style from "./Birthday.module.css";

const Birthday = () => {
  const { stateApp } = useContext(StateContext) as TodoContextProps;
  const { clients } = stateApp;
  let date = new Date().toLocaleDateString().slice(0, -5);

  return (
    <div className={style.container}>
      <h1>Es el Cumpleaños de</h1>
      {clients.map((client) => {
        let dateReform = new Date(`${client.date}T00:00:00`)
          .toLocaleDateString()
          .slice(0, -5);
        return dateReform === date ? (
          <h1 className={style.title}>{client.client}</h1>
        ) : null;
      })}
    </div>
  );
};

export default Birthday;
