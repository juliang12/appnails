import React, { useState } from 'react'
import useCalendar from './useCalendar';
import moment from 'moment';

const useFilter = () => {
    const { eventList } = useCalendar();
    const [fechaSeleccionada, setFechaSeleccionada] = useState<any>(null);
console.log(eventList)
    const handleButtonClick: any = (date: string) => {
        const newDate = date;
        setFechaSeleccionada(newDate);
      };
    
      const handlePrevClick = (date: string) => {
        const newDate = moment(date).subtract(1, "day").toDate();
        setFechaSeleccionada(newDate);
      };
    
      const handleNextClick = (date: string) => {
        const newDate = moment(date).add(1, "day").toDate();
        setFechaSeleccionada(newDate);
      };
  return {fechaSeleccionada, handleButtonClick, handleNextClick, handlePrevClick}
}

export default useFilter