import "./CashRegister.css";
import { StateContext } from "context/StateProvider";
import { useContext } from "react";
import { CashTableRow, Total } from "components";
import { deleteDoc, doc } from "firebase/firestore";
import { bd } from "services/firebase";

const CashRegister = () => {
  const { db } = useContext(StateContext);

  const deleteData = async (id) => {
    const userDoc = doc(bd, "caja", id);
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
