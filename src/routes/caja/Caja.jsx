import { CashForm, CashRegister } from "components";
import style from "./Caja.module.css";

const Caja = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <CashForm />
      </div>
      <div className={style.right}>
        <CashRegister />
      </div>
    </div>
  );
};

export default Caja;
