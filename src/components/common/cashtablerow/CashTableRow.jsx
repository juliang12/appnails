import Button from "components/common/button/Button";
import { StateContext } from "context/StateProvider";
import React, { useContext } from "react";

const CashTableRow = ({ data, deleteData }) => {
  const { setSelected } = useContext(StateContext);
  setSelected(data);

  const { details, manicure, credit, income, exit, id } = data;
  console.log(id);
  return (
    <tr>
      <td>{details}</td>
      <td>{manicure}</td>
      <td>{credit}</td>
      <td>${income}</td>
      <td>${exit}</td>
      <td>
        <Button type="button" onClick={() => deleteData(id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default CashTableRow;
