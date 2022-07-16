import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { bd } from "services/firebase.config";

interface calendarTypes {
  start: Date
  end: Date
  title: string
  id?: string;
  tooltip?: string 
}


const useCalendar = () => {
  const [eventList, setEventList] = useState<calendarTypes[]>([]);
  const ref = collection(bd, "schedule");

  useEffect(() => {
    getClients();
  }, []);
  const getClients = async () => {
    try {
      await onSnapshot(ref, (snapshot: any) => {
        setEventList(
          snapshot.docs.map((doc: any) => ({
            ...doc.data(),
            start: doc.data().start.toDate(),
            end: doc.data().end.toDate(),
            id: doc.id,
          }))
        );
      });
    } catch (error: any) {
      console.log(error.code);
    }
  };
  const handleSelect = async ({ start, end }: any) => {
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

  const deleteClient = async (e: React.ChangeEvent<HTMLInputElement> | any ) => {
    const removeEvent: any = eventList.filter((item) => item.id !== e.id);
    const userDoc = await doc(ref, e.id);
    await deleteDoc(userDoc);
    setEventList(removeEvent);
  };

  const deleteAll = async (e:React.ChangeEvent<HTMLInputElement> ) => {
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
