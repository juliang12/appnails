import { Button } from '../button';
import useCalendar from 'hooks/useCalendar';
import { alert } from 'utils';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import useDataFilter from 'hooks/useDataFilter';


const CalendarUI = ({selectedDate, handleNextClick, handlePrevClick}: any) => {
  const localizer = momentLocalizer(moment);
    const { deleteClient, handleSelect } = useCalendar();
    const {filterForTitle} = useDataFilter()
      const deleteData = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
          if (e) {
            alert(deleteClient, e);
          }
        } catch (error: any) {
          console.log(error.code);
        }
      };
      
      const filterData = filterForTitle()
  return (
    <>
     <Calendar
        style={{
          width: "100%",
          margin: "0 auto",
        }}
        selectable
        events={filterData}
        defaultDate={new Date()}
        localizer={localizer}
        defaultView="day"
        startAccessor="start"
        endAccessor="end"
        date={selectedDate}
        onSelectSlot={handleSelect}
        onSelectEvent={(e: any) => deleteData(e)}
        eventPropGetter={(event: any) => ({
          style: {
            backgroundColor: event.start.getDay() < 5 ? "#A10035" : "#a81d4b",
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
        components={{
          toolbar: (toolbarProps: any) => {
            const { label, date } = toolbarProps;
            return (
              <div>
                <Button onClick={() => handleNextClick(date)}>Siguiente</Button>
                <Button onClick={() => handlePrevClick(date)}>Atras</Button>
                {label}
              </div>
            );
          },
        }}
      />
    </>
  )
}

export default CalendarUI