import Button from "components/button/Button";
import { StateContext } from "context/StateProvider";
import React, { useContext, useEffect, useState } from "react";
import { cashTotal } from "utils/util_total";
import style from "./Total.module.css";

const initialTotals = [
  { manicure: "abi", income: 0 },
  { manicure: "mica", income: 0 },
  { manicure: "jali", income: 0 },
];

const Total = () => {
  const { totalManicure, setTotalManicure, selected, db } =
    useContext(StateContext);
  const [totales, setTotales] = useState(initialTotals);
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    setTotalManicure(cashTotal(db));
  }, [db, totalManicure, setTotalManicure]);

  useEffect(() => {
    totals();
  }, [selected]);

  const totals = () => {
    if (selected.manicure !== "mel") {
      const emp = totales?.map((em) =>
        em.manicure === selected.manicure
          ? { ...em, income: em.income + selected?.income / 2 }
          : em
      );
      setTotales(emp);
    }
  };

  const reset = () => {
    setTotales(initialTotals);
  };

  return (
    <>
      <div className={style.total}>
        <h1>TOTAL: ${totalManicure}</h1>
        <h1>TOTAL CREDIT: ${credit}</h1>
        <ul>
          <li>Mel: {totalManicure}</li>
          {totales.map((item, index) => (
            <li key={index}>
              {item.manicure}: {item.income}
            </li>
          ))}
        </ul>
        <Button onClick={() => reset()}>Reset</Button>
      </div>
    </>
  );
};

export default Total;
