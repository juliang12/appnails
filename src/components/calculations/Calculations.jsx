import React from "react";

const Calculations = ({ item }) => {
  const { manicure, income } = item;
  return (
    <li>
      {manicure}: {income}
    </li>
  );
};

export default Calculations;
