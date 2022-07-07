import { StateContext } from "context/StateProvider";
import React, { useContext } from "react";
import style from "./Birthday.module.css";

const Birthday = () => {
  const { stateApp } = useContext(StateContext);
  const { clients } = stateApp;
  let date = new Date().toDateString();

  return (
    <div className={style.container}>
      <h1>Es el Cumpleaños de</h1>
      {clients.map((client) => {
        let dateReform = new Date(`${client.date}T00:00:00`).toDateString();
        console.log(dateReform);
        return dateReform === date ? (
          <h1 className={style.title}>{client.client}</h1>
        ) : null;
      })}
    </div>
  );
};

export default Birthday;
