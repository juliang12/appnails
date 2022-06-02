import style from "./Button.module.css";

const Button = ({ ...rest }) => {
  return <button {...rest} className={style.button} />;
};

export default Button;
