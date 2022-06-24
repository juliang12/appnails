import Button from "components/button/Button";
import { StateContext } from "context/StateProvider";
import React, { useContext } from "react";

const CashTableRow = ({ data, deleteData }) => {
  const { setSelected } = useContext(StateContext);
  console.log(data);
  setSelected(data);

  const { details, manicure, credit, income, exit, id } = data;
  console.log(id);
  return (
    <tr>
      <td style={{ border: "1px solid #BDBDBD" }}>{details}</td>
      <td style={{ border: "1px solid #BDBDBD" }}>{manicure}</td>
      <td style={{ border: "1px solid #BDBDBD" }}>{credit}</td>
      <td style={{ border: "1px solid #BDBDBD" }}>${income}</td>
      <td style={{ border: "1px solid #BDBDBD" }}>${exit}</td>
      <td style={{ border: "1px solid #BDBDBD" }}>
        <Button type="button" onClick={() => deleteData(id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default CashTableRow;
