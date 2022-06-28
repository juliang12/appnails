import Button from "components/common/button/Button";
import { StateContext } from "context/StateProvider";
import React, { useContext } from "react";
import { motion } from "framer-motion";

const CashTableRow = ({ data, deleteData }) => {
  const { setSelected } = useContext(StateContext);
  setSelected(data);

  const { details, manicure, credit, income, exit, id } = data;

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

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
