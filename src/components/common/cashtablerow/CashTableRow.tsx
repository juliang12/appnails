import { Button } from "components/";
import { StateContext } from "context/StateProvider";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Cash, TodoContextProps } from "models/state.model";
import { variants } from "utils/variants.util";

interface DataProps {
  data: Cash;
  deleteData: any;
}

const CashTableRow = ({ data, deleteData }: DataProps) => {
  const { setSelected } = useContext(StateContext) as TodoContextProps;

  useEffect(() => {
    setSelected(data);
  }, [data, setSelected]);

  const { details, manicure, credit, income, exit, id } = data;

  return (
    <motion.tr
      initial="hidden"
      animate="visible"
      variants={variants}
      layoutId={id}
    >
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
    </motion.tr>
  );
};

export default CashTableRow;
