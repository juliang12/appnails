import { createContext, useState } from "react";
import { useReducer } from "react";
import { initialStates, reducer } from "reducer/reducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [stateApp, dispatch] = useReducer(reducer, initialStates);
  const [selected, setSelected] = useState([]);

  const data = { selected, setSelected, stateApp, dispatch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export { StateContext };
export default StateProvider;
