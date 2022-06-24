import "./CashRegister.css";
import { StateContext } from "context/StateProvider";
import { useContext } from "react";
import { Button, CashTableRow, Total } from "components";
import { deleteDoc, doc } from "firebase/firestore";
import { bd } from "services/firebase.config";
import { TYPES } from "reducer/types";

const CashRegister = () => {
  const { stateApp, dispatch } = useContext(StateContext);
  const { db } = stateApp;
  console.log(db, "state");

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
          </tr>
        </thead>
        <tbody>
          {db &&
            db?.map((item) => (
              <CashTableRow key={item.id} data={item} deleteData={deleteData} />
            ))}
        </tbody>

        <div className="tbody">
          <Total db={db} />
        </div>
      </table>
    </div>
  );
};

export default CashRegister;
