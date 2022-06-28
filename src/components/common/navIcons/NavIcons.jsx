import style from "./NavIcons.module.css";
import {
  AiFillCalculator,
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

const NavIcons = () => {
  return (
    <div className={style.container}>
      <div className={style.icon}>
        <AiOutlineHome />
      </div>
      <div className={style.icon}>
        <AiOutlineSchedule />
      </div>
      <div className={style.icon}>
        <AiFillCalculator />
      </div>
      <div className={style.icon}>
        <AiOutlineUsergroupAdd />
      </div>
    </div>
  );
};

export default NavIcons;
