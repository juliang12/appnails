import { StateContext } from 'context/StateProvider';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { TYPES } from 'reducer';
import { bd } from 'services/firebase.config';

const useClients = () => {
    const {stateApp, dispatch} = useContext(StateContext);
    const [loading, setLoading] = useState(false);
    const userRef = collection(bd, "clients");
    const {clients} = stateApp;


    useEffect(() => {
      getClients()
    }, []);
    
  const addClient = async (data, reset) => {
    setLoading(true)
    try {
       await addDoc(userRef, data);
    dispatch({ types: TYPES.ADD_CLIENT, payload: data });
    getClients()
    reset();
    } catch (error) {
      console.log(error.code)
    }
    setLoading(false)
   
  };

  const getClients = async ()=>{
    setLoading(true)
    try {
      const data = await getDocs(userRef)
      dispatch({types: TYPES.GET_DATA_CLIENTS, payload: data.docs})
    } catch (error) {
      console.log(error.code)
    }
    setLoading(false)
  }

  const deleteClient = async (id)=>{
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