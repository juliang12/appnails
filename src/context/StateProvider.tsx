import { createContext, ReactNode, useState, useMemo, useReducer } from "react";
import { initialStates, reducer } from "reducer";

type Props = {
  children?: ReactNode;
};

const StateContext = createContext({});

const StateProvider = ({ children }: Props) => {
  const [stateApp, dispatch] = useReducer(reducer, initialStates);
  const [selected, setSelected] = useState<any>([]);

  const data: any = useMemo(
    () => ({ selected, setSelected, stateApp, dispatch }),
    [stateApp, selected]
  );

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export { StateContext };
export default StateProvider;
