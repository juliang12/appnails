import { StateContext } from "context/StateProvider";
import React, { useContext } from "react";
import { cashTotal } from "utils/util_total";
import { cashTotalUnit } from "utils/util_totalUnits";
import style from "./Total.module.css";

const Total = () => {
  const { stateApp } = useContext(StateContext);
  const { db } = stateApp;

  return (
    <>
      <div className={style.total}>
        <h1>TOTAL: ${cashTotalUnit(db, "efectivo")}</h1>
        <h1>TOTAL CREDIT: ${cashTotalUnit(db, "digital")}</h1>
        <h3>Mica:${cashTotal(db, "mica")}</h3>
        <h3>Abi: ${cashTotal(db, "abi")}</h3>
        <h3>Jali: {cashTotal(db, "jali")}</h3>
      </div>
    </>
  );
};

export default Total;
