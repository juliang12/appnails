import { StateContext } from 'context/StateProvider';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TYPES } from 'reducer/types';
import { auth, bd } from 'services/firebase.config';

const useFirebase = () => {
    const {dispatch} = useContext(StateContext);
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const userCollectionRef = collection(bd, "caja");



         

         const loginUser = async (values) => {
            try {
              await signInWithEmailAndPassword(auth, values.email, values.password);
              console.log("Usuario logueado")
            } catch (error) {
              console.log("usuario incorrecto")
            }     
          };

    const createData = async (data, reset)=>{
        setLoading(true)
        try {
          await addDoc(userCollectionRef, data );
        dispatch({types: TYPES.CREATE_DATA, payload: data})
          reset()
        } catch (error) {
          console.log(error.message)
        }finally{
          setLoading(false)
        }
       
        }

        const getData = async ()=>{
          setLoading(true)
          try {
             const data = await getDocs(userCollectionRef);
             dispatch({types: TYPES.GET_DATA, payload: data.docs })
          } catch (error) {
            console.log(error.message)
          }
         setLoading(false)
        }

        
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (user)=>{
     if(user){
       const {email} = user
       setUser({email})
     }else{
       setUser(null)
     }
    } )
 
    return ()=> unSuscribe();
     }, []);

        useEffect(() => {
          getData()
        }, []);

        const signOutUser =  ()=>{
          signOut(auth)
        }

  return{
    user,
    loading,
    createData,
    loginUser,
    signOutUser,
  }
}

export default useFirebase