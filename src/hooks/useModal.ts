import moment from 'moment';
import {useState} from 'react'
const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fechaSeleccionada, setFechaSeleccionada] = useState<any>(null);
  console.log(fechaSeleccionada)
    const onClose = () => {
        setIsOpen(!isOpen);
      };

      const handleButtonClick: any = (date: string) => {
        const newDate = date;
        setFechaSeleccionada(newDate);
        onClose()
      };

      const handlePrevClick = (date: string) => {
        const newDate = moment(date).subtract(1, "day").toDate();
        setFechaSeleccionada(newDate);
      };
    
      const handleNextClick = (date: string) => {
        const newDate = moment(date).add(1, "day").toDate();
        setFechaSeleccionada(newDate);
      };

  return {isOpen, fechaSeleccionada, handleButtonClick, handleNextClick, handlePrevClick, onClose}
}

export default useModal