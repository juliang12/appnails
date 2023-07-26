import { Button } from "../button";
import ModalSearch from "../modal/ModalSearch";
import style from "./MyCalendar.module.css";
import useModal from "hooks/useModal";
import CalendarUI from "./Calendar";
import useDataFilter from "hooks/useDataFilter";


const MyCalendar = () => {
  const {
    isOpen,
    onClose,
    handleButtonClick,
    handlePrevClick,
    handleNextClick,
    fechaSeleccionada
  } = useModal();
  const {search, handleChange, filterForTitle} = useDataFilter()

  const filterData = filterForTitle();

  return (
    <>
      {isOpen && (
        <ModalSearch onClose={onClose}>
          <input
            type="text"
            value={search}
            name="search"
            onChange={(e) => handleChange(e)}
          />

          <table className={style.tableContainer}>
            <tr>
              <td>Clienta</td>
              <td>fecha</td>
              <td>Accion</td>
            </tr>
            {filterData?.map((turno: any) => (
              <tr>
                <td>{turno.title}</td>
                <td>{new Date(turno.end).toLocaleString()}</td>
                <td>
                  <Button onClick={() => handleButtonClick(turno.start)}>
                    Ir
                  </Button>
                </td>
              </tr>
            ))}
          </table>
        </ModalSearch>
      )}
      <Button onClick={onClose}>Buscar</Button>
     <CalendarUI selectedDate={fechaSeleccionada} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick}/>
    </>
  );
};

export default MyCalendar;
