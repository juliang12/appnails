import React from "react";
import style from "./TextInput.module.css";

const TextInput = ({ label, ...rest }) => {
  return (
    <>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input {...rest} className={style.input} />
    </>
  );
};

export default TextInput;
