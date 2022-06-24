import React, { useContext } from 'react'
import { Navigate,  Outlet } from 'react-router-dom'
import { StateContext } from "context/StateProvider";


const PrivateRoute = () => {
    const {stateApp} = useContext(StateContext);
    const {user} = stateApp

  return user ? <Outlet/> : <Navigate to="/login"  />
}

export default PrivateRoute