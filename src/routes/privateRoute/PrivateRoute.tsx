import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "context/StateProvider";
import { TodoContextProps } from "models/state.model";

const PrivateRoute = () => {
  const { stateApp } = useContext(StateContext) as TodoContextProps;
  const { user } = stateApp;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
