import { useContext } from "react";
import style from "./Total.module.css";
import { TodoContextProps } from "models/state.model";
import { cashTotalUnit, cashTotal } from "utils";
import { StateContext } from "context/StateProvider";

const Total = () => {
  const { stateApp } = useContext(StateContext) as TodoContextProps;
  const { filtered } = stateApp;

  return (
    <div className={style.total}>
      <div className={style.totals}>
        <h1>TOTAL EFECTIVO: ${cashTotalUnit(filtered, "efectivo")}</h1>
        <h1>TOTAL CREDITO: ${cashTotalUnit(filtered, "digital")}</h1>
      </div>
      <div className={style.porcentaje}>
        <h3>Mica: ${cashTotal(filtered, "mica")}</h3>
        <h3>Abi: ${cashTotal(filtered, "abi")}</h3>
        <h3>Jali: ${cashTotal(filtered, "jali")}</h3>
      </div>
    </div>
  );
};

export default Total;
