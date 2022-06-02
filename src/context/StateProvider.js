import { createContext, useState } from "react";


const StateContext = createContext();

const StateProvider = ({children})=>{
    const [totalManicure, setTotalManicure] = useState(null);
    const [selected, setSelected] = useState(null);

    const data = {totalManicure, setTotalManicure, selected, setSelected}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext}
export default StateProvider

