import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { bd } from "services/firebase.config";

const useCalendar = () => {
  const [eventList, setEventList] = useState([]);
  const ref = collection(bd, "schedule");

  useEffect(() => {
    getClients();
  }, []);
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
  const handleSelect = async ({ start, end }) => {
    const client = window.prompt("Agrega una clienta");

    if (client) {
      let newEvent = {
        start: start,
        end: end,
        title: client,
      };

      await addDoc(ref, newEvent);
      getClients();
      setEventList([...eventList, newEvent]);
    }
  };

  const deleteClient = async (e) => {
    const removeEvent = eventList.filter((item) => item.id !== e.id);
    const userDoc = await doc(ref, e.id);
    await deleteDoc(userDoc);
    setEventList(removeEvent);
  };

  const deleteAll = async (e) => {
    console.log({ e });
  };

  return {
    eventList,
    handleSelect,
    deleteClient,
    deleteAll,
  };
};

export default useCalendar;
