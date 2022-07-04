import { CashForm, CashRegister } from "components";
import Search from "components/common/search/Search";
import style from "./Caja.module.css";

const Caja = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <CashForm />
      </div>
      <div className={style.right}>
        <div className={style.containerSearch}>
          <Search
            label="Buscador"
            placeholder="Buscar Manicura..."
            className={style.search}
          />
        </div>

        <CashRegister />
      </div>
    </div>
  );
};

export default Caja;
