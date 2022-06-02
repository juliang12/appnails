import { StateContext } from "context/StateProvider";
import React, { useContext, useEffect } from "react";
import { cashTotal } from "utils/util_total";
import style from "./Total.module.css";

const Total = ({ db }) => {
  const { totalManicure, setTotalManicure, selected } =
    useContext(StateContext);

  console.log();
  console.log(totalManicure);
  useEffect(() => {
    setTotalManicure(cashTotal(db));
  }, [db]);

  return (
    <>
      <div className={style.total}>
        <h1>TOTAL: ${cashTotal(db)}</h1>
        <div>
          <h3>Mel:{totalManicure}</h3>
        </div>
      </div>
    </>
  );
};

export default Total;
