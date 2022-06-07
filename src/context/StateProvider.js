import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const StateContext = createContext();

const initialDb = [
    {id: uuidv4(), manicure: "mel", income: 20, exit: 30, credit: true}
  ]

const StateProvider = ({children})=>{
    const [db, setDb] = useState(initialDb);
    const [totalManicure, setTotalManicure] = useState(null);
    const [selected, setSelected] = useState({});

    const createData = (data, reset)=>{
        console.log(data)
        if(data){
        data.id = uuidv4();
        setDb([...db, data])
        }
        reset()
      }

    const data = {totalManicure, setTotalManicure, selected, setSelected, db, setDb, createData}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext}
export default StateProvider

