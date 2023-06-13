import "./CashRegister.css";
import { useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { AnimatePresence } from "framer-motion";
import { TodoContextProps } from "models/state.model";
import { StateContext } from "context/StateProvider";
import { bd } from "services/firebase.config";
import { TYPES } from "reducer";
import { CashTableRow, Total } from "components/";
import useFirebase from "hooks/useFirebase";

const CashRegister = () => {
  const { stateApp, dispatch } = useContext(StateContext) as TodoContextProps;
  const { getData } = useFirebase();
  const { filtered } = stateApp;

  const deleteData = async (id: string) => {
    const userDoc = doc(bd, "caja", id);
    dispatch({ types: TYPES.DELETE_DATA, payload: id });
    await deleteDoc(userDoc);
    await getData();
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
              filtered.map((doc: any) => (
                <CashTableRow key={doc.id} data={doc} deleteData={deleteData} />
              ))}
          </AnimatePresence>
        </tbody>
      </table>
      <div className="container__totals">
        <Total />
      </div>
    </div>
  );
};

export default CashRegister;
