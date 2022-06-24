import MyCalendar from "components/calendar/MyCalendar";
import useCalendar from "hooks/useCalendar";
import "moment/locale/es";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Swal from "sweetalert2";

const Schedule = () => {
  const { deleteClient } = useCalendar();

  const deleteData = async (e) => {
    try {
      if (e) {
        Swal.fire({
          title: "Estas segura que quierer eliminarla?",
          text: "No se podra revertir!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "Eliminado!",
              "La clienta fue eliminada.",
              "Exitosamente"
            );
            deleteClient(e);
          }
        });
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
