import "./CashRegister.css";
import { StateContext } from "context/StateProvider";
import { useContext } from "react";
import { CashTableRow, Total } from "components";
import { deleteDoc, doc } from "firebase/firestore";
import { bd } from "services/firebase.config";
import { TYPES } from "reducer/types";
import { AnimatePresence } from "framer-motion";
import { orderArray } from "utils/util_order";

const CashRegister = () => {
  const { stateApp, dispatch } = useContext(StateContext);
  const { db } = stateApp;

  const deleteData = async (id) => {
    const userDoc = doc(bd, "caja", id);
    dispatch({ types: TYPES.DELETE_DATA, payload: id });
    await deleteDoc(userDoc);
  };

  console.log(db);

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
            {db &&
              db?.map((item) => (
                <CashTableRow
                  key={item.id}
                  data={item}
                  deleteData={deleteData}
                />
              ))}
          </AnimatePresence>
        </tbody>
        <div className="tbody">
          <Total db={db} />
        </div>
      </table>
    </div>
  );
};

export default CashRegister;
