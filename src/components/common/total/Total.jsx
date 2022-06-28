import { StateContext } from "context/StateProvider";
import React, { useContext } from "react";
import { useMemo } from "react";
import { cashTotal } from "utils/util_total";
import style from "./Total.module.css";

const Total = () => {
  const { stateApp } = useContext(StateContext);
  const { db } = stateApp;

  const total = () => {
    return db.reduce((acc, item) => {
      return item.credit === "efectivo" ? acc + item.income - item.exit : acc;
    }, 0);
  };

  const totalCredit = () => {
    return db.reduce((acc, item) => {
      return item.credit === "digital" ? acc + item.income - item.exit : acc;
    }, 0);
  };

  return (
    <>
      <div className={style.total}>
        <h1>TOTAL: ${total}</h1>
        <h1>TOTAL CREDIT: ${totalCredit}</h1>
        <h3>Mica:${cashTotal(db, "mica")}</h3>
        <h3>Abi: ${cashTotal(db, "abi")}</h3>
        <h3>Jali: {cashTotal(db, "jali")}</h3>
      </div>
    </>
  );
};

export default Total;
