import "./CashRegister.css";
import { StateContext } from "context/StateProvider";
import { useContext } from "react";
import { CashTableRow, Total } from "components";

const CashRegister = () => {
  const { db, setDb } = useContext(StateContext);

  const deleteData = (id) => {
    let newArray = db.filter((item) => item.id !== id);
    setDb(newArray);
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
