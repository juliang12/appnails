import { addDoc, collection, onSnapshot } from "firebase/firestore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { bd } from "services/firebase.config";

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
        components={eventList}
      />
    </div>
  );
};

export default Schedule;
