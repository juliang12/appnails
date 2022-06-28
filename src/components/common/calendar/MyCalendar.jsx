import useCalendar from "hooks/useCalendar";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import { Calendar } from "react-big-calendar";

const MyCalendar = ({ deleteData }) => {
  const { eventList, handleSelect } = useCalendar();
  const localizer = momentLocalizer(moment);

  return (
    <>
      <Calendar
        selectable
        events={eventList}
        defaultDate={new Date()}
        localizer={localizer}
        defaultView="day"
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        onSelectEvent={(e) => deleteData(e)}
        components={eventList}
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
