import LogoNails from "assets/logo.png";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={LogoNails} alt="" />
    </div>
  );
};

export default Logo;
