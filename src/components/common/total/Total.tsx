import { useContext } from "react";
import style from "./Total.module.css";
import { TodoContextProps } from "models/state.model";
import { cashTotalUnit, cashTotal } from "utils";
import { StateContext } from "context/StateProvider";

const Total = () => {
  const { stateApp } = useContext(StateContext) as TodoContextProps;
  const { db } = stateApp;

  return (
    <div className={style.total}>
      <div className={style.totals}>
        <h1>TOTAL EFECTIVO: ${cashTotalUnit(db, "efectivo")}</h1>
        <h1>TOTAL CREDITO: ${cashTotalUnit(db, "digital")}</h1>
      </div>
      <div className={style.porcentaje}>
        <h3>Mica: ${cashTotal(db, "mica")}</h3>
        <h3>Abi: ${cashTotal(db, "abi")}</h3>
        <h3>Jali: ${cashTotal(db, "jali")}</h3>
        <h3>Flor: ${cashTotal(db, "flor")}</h3>
      </div>
    </div>
  );
};

export default Total;
