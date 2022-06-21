import { Layout } from "components";
import Schedule from "components/schedule/Schedule";
import useFirebase from "hooks/useFirebase";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Caja from "routes/Caja";
import Clientas from "routes/Clientas";
import Home from "routes/Home";
import Login from "routes/Login";
import "./App.css";

function App() {
  const {user} = useFirebase();
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
        <Layout>
          <Routes>
            {!user ?(<Route path="/login" element={<Login />} />):(
              <>
            <Route path="/" element={<Home />} />
            <Route path="/caja" element={<Caja />} />
            <Route path="/agenda" element={<Schedule />} />
            <Route path="/clientas" element={<Clientas />} />
            </>)}
          </Routes>
        </Layout>
    </>
  );
}

export default App;
