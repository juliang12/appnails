import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MyCalendar } from "components";
import useCalendar from "hooks/useCalendar";
import { alert } from "utils/alert";

const Schedule = () => {
  const { deleteClient } = useCalendar();

  const deleteData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e) {
        alert(deleteClient, e);
      }
    } catch (error: any) {
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
