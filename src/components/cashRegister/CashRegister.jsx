import CashTableRow from "components/cashtablerow/CashTableRow";
import "./CashRegister.css";
import Total from "components/total/Total";

const CashRegister = ({ db }) => {
  return (
    <div className="container__register">
      <table className="table">
        <thead>
          <tr>
            <th>Manicura</th>
            <th>Entrada</th>
            <th>Salida</th>
          </tr>
        </thead>
        <tbody>
          {db && db?.map((item) => <CashTableRow key={item.id} data={item} />)}
        </tbody>
        <thead>
          <tr>
            <th>Manicura</th>
            <th>Total Efectivo</th>
            <th>Total Credito</th>
            <th>Ganancias</th>
            <th>Total General</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <Total db={db} />
        </tbody>
      </table>
    </div>
  );
};

export default CashRegister;
