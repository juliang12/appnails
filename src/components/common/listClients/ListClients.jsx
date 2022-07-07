import { StateContext } from "context/StateProvider";
import useClients from "hooks/useClients";
import React, { useContext } from "react";
import Button from "../button/Button";
import Loader from "../loader/Loader";
import style from "./ListClients.module.css";

const ListClients = () => {
  const { stateApp } = useContext(StateContext);
  const { deleteClient, loading } = useClients();
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
          {clients.map((client) => (
            <tr key={client.id} className={style.tr}>
              <td className={style.td}>{client.client}</td>
              <td className={style.td}>{client.date}</td>
              <td className={style.td}>{client.service}</td>
              <td className={style.td}>{client.cellphone}</td>
              <td>
                <Button onClick={() => deleteClient(client.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListClients;
