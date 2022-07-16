import useCalendar from "../../../hooks/useCalendar";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import { Calendar } from "react-big-calendar";

const MyCalendar = ({ deleteData }: any) => {
  const { eventList, handleSelect } = useCalendar();
  const localizer = momentLocalizer(moment);

  return (
    <>
      <Calendar
        style={{
          width: "1360px",
          margin: "0 auto",
        }}
        selectable
        events={eventList}
        defaultDate={new Date()}
        localizer={localizer}
        defaultView="day"
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        onSelectEvent={(e) => deleteData(e)}
        eventPropGetter={(event: any) => ({
          style: {
            backgroundColor: event.start.getDay() < 5 ? "#A10035" : "#FFE7BF",
          },
        })}
        culture="es"
        messages={{
          next: "Siguiente",
          month: "Meses",
          week: "Semana",
          day: "Dia",
          previous: "Anterior",
          today: "Actual",
        }}
      />
    </>
  );
};

export default MyCalendar;
