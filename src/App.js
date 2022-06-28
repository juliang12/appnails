import "./App.css";
import { Layout, Schedule } from "components";
import { StateContext } from "context/StateProvider";
import {lazy, Suspense, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import PrivateRoute from "routes/privateRoute/PrivateRoute";

const Home = lazy(()=>import("routes/home/Home"))
const Caja = lazy(()=>import("routes/caja/Caja"))
const Clientas = lazy(()=>import("routes/clientas/Clientas"))
const Login = lazy(()=>import("routes/login/Login"))


function App() {
  const {stateApp} = useContext(StateContext);
  const {user} = stateApp;
  const history = useNavigate()

     useEffect(() => {
        if(!user){
          history("/login")
        }else{
          history("/")
        }
     }, [user]);
  
  return (
    <>
    <Suspense>
        <Layout>
          <Routes>
           <Route path="/login" element={<Login />}/>
           <Route element={<PrivateRoute/>}>
            <Route path="/" element={<Home />} />
            <Route path="/caja" element={<Caja />} />
            <Route path="/agenda" element={<Schedule />} />
            <Route path="/clientas" element={<Clientas />} />
            </Route>
          </Routes>
        </Layout>
        </Suspense>
    </>
  );
}

export default App;
