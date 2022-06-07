import Button from "components/button/Button";
import { StateContext } from "context/StateProvider";
import React, { useContext } from "react";

const CashTableRow = ({ data, deleteData }) => {
  const { setSelected } = useContext(StateContext);
  setSelected(data);
  return (
    <tr>
      <td>{data.manicure}</td>
      <td>${data.income}</td>
      <td>${data.exit}</td>
      <td>
        <Button onClick={() => deleteData(data.id)}>Eliminar</Button>
      </td>
    </tr>
  );
};

export default CashTableRow;
