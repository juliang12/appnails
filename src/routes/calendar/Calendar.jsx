import Schedule from "components/common/schedule/Schedule";
import style from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={style.container}>
      <Schedule />
    </div>
  );
};

export default Calendar;
