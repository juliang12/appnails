import { StateContext } from '../context/StateProvider';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react'
import { TYPES } from '../reducer';
import { bd } from 'services/firebase.config';
import { TodoContextProps } from 'models/state.model';

const useClients = () => {
    const { dispatch} = useContext(StateContext) as TodoContextProps;
    const [loading, setLoading] = useState(false);
    const userRef = collection(bd, "clients");

    useEffect(() => {
      getClients()
    }, []);
    
  const addClient = async (data: any, reset: any) => {
    setLoading(true)
    try {
       await addDoc(userRef, data);
    dispatch({ types: TYPES.ADD_CLIENT, payload: data });
    getClients()
    reset();
    } catch (error:any) {
      console.log(error.code)
    }
    setLoading(false)
   
  };

  const getClients = async ()=>{
    setLoading(true)
    try {
      const data = await getDocs(userRef)
      dispatch({types: TYPES.GET_DATA_CLIENTS, payload: data.docs})
    } catch (error: any) {
      console.log(error.code)
    }
    setLoading(false)
  }

  const deleteClient = async (id: string)=>{
    const clientDoc = doc(bd, "clients", id)
    dispatch({types: TYPES.DELETE_CLIENT, payload: id})
    await deleteDoc(clientDoc)
  }


  return {
    addClient,
    getClients,
    deleteClient,
    loading
  }
}

export default useClients