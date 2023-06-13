import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MyCalendar } from "components";
import useCalendar from "hooks/useCalendar";
import { alert } from "utils/alert";

const Schedule = () => {
  const { deleteClient, updateClient } = useCalendar();

  const updateData = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    updateClient(e);
  };

  const deleteData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e) {
        alert(deleteClient, updateData, e);
      }
    } catch (error: any) {
      console.log(error.code);
    }
  };

  return (
    <>
      <MyCalendar deleteData={deleteData} updateData={updateData} />
    </>
  );
};

export default Schedule;
