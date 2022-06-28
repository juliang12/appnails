import { StateContext } from "context/StateProvider";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TYPES } from "reducer/types";
import { auth, bd } from "services/firebase.config";

const useFirebase = () => {
  const { stateApp, dispatch } = useContext(StateContext);
  const { user } = stateApp;
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const userCollectionRef = collection(bd, "caja");

  const loginUser = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      history("/");
      console.log("Usuario logueado");
    } catch (error) {
      console.log("usuario incorrecto");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const createData = async (data, reset) => {
    setLoading(true);
    try {
      await addDoc(userCollectionRef, data);
      dispatch({ types: TYPES.CREATE_DATA, payload: data });
      getData();
      reset();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getDocs(userCollectionRef);
      dispatch({ types: TYPES.GET_DATA, payload: data.docs });
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (userAuth) => {
      dispatch({ types: TYPES.LOGIN_AUTH, payload: userAuth });
    });

    return () => unSuscribe();
  }, []);

  return {
    user,
    loading,
    createData,
    loginUser,
    getData,
  };
};

export default useFirebase;
