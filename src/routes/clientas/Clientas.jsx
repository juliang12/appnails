import Birthday from "components/common/birthday/Birthday";
import FormClients from "components/common/formClients/FormClients";
import ListClients from "components/common/listClients/ListClients";
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
