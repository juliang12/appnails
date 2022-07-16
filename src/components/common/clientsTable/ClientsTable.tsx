import useClients from "hooks/useClients";
import { motion } from "framer-motion";
import style from "./ClientsTable.module.css";
import { variants } from "utils/variants.util";
import { Button } from "components/";
import { Clients } from "models/state.model";

interface DataClientsProps {
  data: Clients;
}

const ClientsTable = ({ data }: DataClientsProps) => {
  const { deleteClient } = useClients();

  const { client, date, service, cellphone, id } = data;

  return (
    <motion.tr
      initial="hidden"
      animate="visible"
      variants={variants}
      layoutId={id}
      className={style.tr}
    >
      <td className={style.td}>{client}</td>
      <td className={style.td}>{date}</td>
      <td className={style.td}>{service}</td>
      <td className={style.td}>{cellphone}</td>
      <td>
        <Button onClick={() => deleteClient(id)}>Eliminar</Button>
      </td>
    </motion.tr>
  );
};

export default ClientsTable;
