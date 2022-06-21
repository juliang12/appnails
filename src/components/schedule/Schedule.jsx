import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import moment from "moment";
import "moment/locale/es";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { bd } from "services/firebase.config";
import Swal from "sweetalert2";

const Schedule = () => {
  const localizer = momentLocalizer(moment);
  const [eventList, setEventList] = useState([]);
  const ref = collection(bd, "schedule");

  useEffect(() => {
    const getClients = async () => {
      try {
        await onSnapshot(ref, (snapshot) => {
          setEventList(
            snapshot.docs.map((doc) => ({
              ...doc.data(),
              start: doc.data().start.toDate(),
              end: doc.data().end.toDate(),
              id: doc.id,
            }))
          );
        });
      } catch (error) {
        console.log(error.code);
      }
    };
    getClients();
  }, []);

  const handleSelect = async ({ start, end }) => {
    const client = window.prompt("Agrega una clienta");

    if (client) {
      let newEvent = {
        start: start,
        end: end,
        title: client,
      };

      await addDoc(ref, newEvent);
      setEventList([...eventList, newEvent]);
    }
  };

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
            const removeEvent = eventList.filter((item) => item.id !== e.id);
            const userDoc = doc(ref, e.id);
            deleteDoc(userDoc);
            setEventList(removeEvent);
            Swal.fire(
              "Eliminado!",
              "La clienta fue eliminada.",
              "Exitosamente"
            );
          }
        });
      }
    } catch (error) {}
  };

  return (
    <div>
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
    </div>
  );
};

export default Schedule;
