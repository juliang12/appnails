import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TYPES } from "reducer";
import { auth, bd } from "services/firebase.config";
import { orderArray } from "utils/util_order";
import { TodoContextProps } from "models/state.model";
import { StateContext } from "context/StateProvider";



const useFirebase = () => {
  const { stateApp, dispatch } = useContext(StateContext) as TodoContextProps;
  const { user, db } = stateApp;
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const userCollectionRef = collection(bd, "caja");

useEffect(() => {
  orderArray(db)
}, [db]);

  const loginUser = async (values: string | any) => {
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

  const createData = async (data: any, reset: any) => {
    setLoading(true);
    try {
      const newData = {
        details: data.details,
        credit: data.credit,
        manicure: data.manicure,
        exit: data.exit,
        income: data.income,
        id: Date.now()
      }
      await addDoc(userCollectionRef, newData);
      dispatch({ types: TYPES.CREATE_DATA, payload: data });
      getData();
      reset();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getDocs(userCollectionRef)
      dispatch({ types: TYPES.GET_DATA, payload: data.docs});
    } catch (error:any) {
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
