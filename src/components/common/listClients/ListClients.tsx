import { useContext } from "react";
import { TodoContextProps } from "models/state.model";
import style from "./ListClients.module.css";
import { AnimatePresence } from "framer-motion";
import { StateContext } from "context/StateProvider";
import { ClientsTable } from "components";

const ListClients = () => {
  const { stateApp } = useContext(StateContext) as TodoContextProps;
  const { clients } = stateApp;

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.tr}>
            <th className={style.th}>Clienta</th>
            <th className={style.th}>Fecha de Nacimiento</th>
            <th className={style.th}>Servicio</th>
            <th className={style.th}>Tel</th>
            <th className={style.th}>Accion</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          <AnimatePresence>
            {clients?.map((item) => (
              <ClientsTable key={item.id} data={item} />
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default ListClients;
