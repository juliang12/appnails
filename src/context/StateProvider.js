import { createContext, useEffect, useState } from "react";
import { bd } from "services/firebase";
import {collection, getDocs, addDoc} from "firebase/firestore"


const StateContext = createContext();

  
const StateProvider = ({children})=>{
    const [db, setDb] = useState([]);
    const [selected, setSelected] = useState([]);
    const userCollectionRef = collection(bd, "caja"); 

    const createData = async (data, reset)=>{
       await addDoc(userCollectionRef, data )
        reset()
      }

      const getData = async ()=>{
        const data = await getDocs(userCollectionRef);
        setDb(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      }

      useEffect(() => {
        getData()
      }, []);


    const data = { selected, setSelected, db, setDb, createData}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext}
export default StateProvider

