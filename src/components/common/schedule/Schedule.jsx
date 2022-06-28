import MyCalendar from "components/common/calendar/MyCalendar";
import useCalendar from "hooks/useCalendar";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { alert } from "utils/alert";

const Schedule = () => {
  const { deleteClient } = useCalendar();

  const deleteData = async (e) => {
    try {
      if (e) {
        alert(deleteClient, e);
      }
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <MyCalendar deleteData={deleteData} />
    </>
  );
};

export default Schedule;
