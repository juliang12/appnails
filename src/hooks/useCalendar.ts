import { TodoContextProps } from "@models/state.model";
import { StateContext } from "context/StateProvider";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { bd } from "services/firebase.config";

interface calendarTypes {
  start: Date;
  end: Date;
  title: string;
  id?: string;
  tooltip?: string;
  creador?: { id: string; user: string };
}

const useCalendar = () => {
  const { stateApp } = useContext(StateContext) as TodoContextProps;
  const { user } = stateApp;
  const [eventList, setEventList] = useState<calendarTypes[]>([]);
  const ref = collection(bd, "schedule");

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const refQuery = query(collection(bd, "schedule"));
    try {
      await onSnapshot(refQuery, (snapshot: any) => {
        console.log(snapshot, "value");
        const object = snapshot.docs.map((doc: any) => ({
          ...doc.data(),
          start: doc.data().start.toDate(),
          end: doc.data().end.toDate(),
          id: doc.id,
        }));
        setEventList(object);
      });
    } catch (error: any) {
      console.log(error.code);
    }
  };
  const handleSelect = async ({ start, end }: any) => {
    const refClient = collection(bd, `schedule`);
    const client = window.prompt("Agrega una clienta");

    if (client) {
      let newEvent = {
        creador: { id: user.uid, user: user.email },
        start: start,
        end: end,
        title: client,
      };

      await addDoc(refClient, newEvent);
      getClients();
      setEventList([...eventList, newEvent]);
    }
  };
  const updateClient = async (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const title = prompt("Cambiar titulo", e.title);

    if (title === null) return;

    const exist = eventList.find((item) => item.id === e.id);

    if (exist) {
      const newDoc = await doc(ref, e.id);
      const newEvent: any = {
        ...exist,
        title: title,
      };

      await updateDoc(newDoc, newEvent);

      setEventList([...eventList, newEvent]);
    }
  };

  const deleteClient = async (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const removeEvent: any = eventList.filter((item) => item.id !== e.id);
    const userDoc = await doc(ref, e.id);
    await deleteDoc(userDoc);
    setEventList(removeEvent);
  };

  return {
    eventList,
    handleSelect,
    deleteClient,
    updateClient,
  };
};

export default useCalendar;
