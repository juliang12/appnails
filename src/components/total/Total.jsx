import Button from "components/button/Button";
import Calculations from "components/calculations/Calculations";
import { StateContext } from "context/StateProvider";
import React, { useContext } from "react";
import { useMemo } from "react";
import style from "./Total.module.css";

const Total = () => {
  const { totales, reset, db } = useContext(StateContext);

  const total = useMemo(() => {
    return db.reduce((acc, item) => {
      return item.credit === "efectivo" ? acc + item.income - item.exit : acc;
    }, 0);
  }, [db]);

  const totalCredit = useMemo(() => {
    return db.reduce((acc, item) => {
      return item.credit === "digital" ? acc + item.income - item.exit : acc;
    }, 0);
  }, [db]);

  return (
    <>
      <div className={style.total}>
        <h1>TOTAL: ${total}</h1>
        <h1>TOTAL CREDIT: ${totalCredit}</h1>
        <ul>
          {totales.map((item) => (
            <Calculations key={item.manicure} item={item} />
          ))}
        </ul>
        <Button onClick={() => reset()}>Reset</Button>
      </div>
    </>
  );
};

export default Total;
