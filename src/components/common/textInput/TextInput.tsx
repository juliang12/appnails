import { TextInputTypes } from "models/inputText.model";
import style from "./TextInput.module.css";

const TextInput = ({ label, ...rest }: TextInputTypes) => {
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
