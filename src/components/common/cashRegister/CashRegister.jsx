import "./CashRegister.css";
import { StateContext } from "context/StateProvider";
import { useContext } from "react";
import { CashTableRow, Total } from "components";
import { deleteDoc, doc } from "firebase/firestore";
import { bd } from "services/firebase.config";
import { TYPES } from "reducer/types";
import { AnimatePresence } from "framer-motion";

const CashRegister = () => {
  const { stateApp, dispatch } = useContext(StateContext);
  const { db, filtered } = stateApp;

  const deleteData = async (id) => {
    const userDoc = doc(bd, "caja", id);
    dispatch({ types: TYPES.DELETE_DATA, payload: id });
    await deleteDoc(userDoc);
  };

  return (
    <div className="container__register">
      <table className="table">
        <thead>
          <tr>
            <th>Detalle</th>
            <th>Manicura</th>
            <th>Forma</th>
            <th>Entrada</th>
            <th>Salida</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {filtered &&
              filtered?.map((item) => (
                <CashTableRow
                  key={item.id}
                  data={item}
                  deleteData={deleteData}
                />
              ))}
          </AnimatePresence>
        </tbody>
      </table>{" "}
      <div className="container__totals">
        <Total />
      </div>
    </div>
  );
};

export default CashRegister;
