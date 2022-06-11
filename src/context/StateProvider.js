import { totals } from "components/handlers";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const StateContext = createContext();

const initialTotals = [
    { manicure: "abi", income: 0 },
    { manicure: "mica", income: 0 },
    { manicure: "jali", income: 0 },
  ];
  

const StateProvider = ({children})=>{
    const [db, setDb] = useState([]);
    const [totales, setTotales] = useState(initialTotals);
    const [selected, setSelected] = useState([]);

    const createData = (data, reset)=>{
        setSelected(data)

        if(data){
        data.id = uuidv4();
        setDb([...db, data])
        }
        totals(data, totales, setTotales)
        reset()
      }

      const reset = () => {
        setTotales(initialTotals);
      };

    const data = { selected, setSelected, db, setDb, createData, totales, setTotales, reset}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext}
export default StateProvider

