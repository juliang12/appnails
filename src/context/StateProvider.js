import { createContext, useEffect, useState } from "react";
import { auth, bd } from "services/firebase.config";
import {collection, getDocs, addDoc} from "firebase/firestore"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const StateContext = createContext();

  
const StateProvider = ({children})=>{
    const [db, setDb] = useState([]);
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);

    const userCollectionRef = collection(bd, "caja");
    
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

    const createData = async (data, reset)=>{
      setLoading(true)
      try {
        await addDoc(userCollectionRef, data );
       setDb([...db,data ])
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
        setDb(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        } catch (error) {
          console.log(error.message)
        }
       setLoading(false)
      }

      const loginUser = async (values) => {
        try {
          await signInWithEmailAndPassword(auth, values.email, values.password);
          console.log("Usuario logueado")
        } catch (error) {
          console.log("usuario incorrecto")
        }     
      };

      const signOutUser = ()=>{
        signOut(auth)
      }

      useEffect(() => {
        getData()
      }, []);


    const data = { selected, setSelected, db, setDb, createData, loading, loginUser, signOutUser, user}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext}
export default StateProvider

