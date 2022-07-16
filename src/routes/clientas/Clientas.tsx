import { Birthday, FormClients, ListClients } from "components";
import style from "./Clientas.module.css";

const Clientas = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <FormClients />
      </div>
      <div className={style.right}>
        <Birthday />
        <ListClients />
      </div>
    </div>
  );
};

export default Clientas;
