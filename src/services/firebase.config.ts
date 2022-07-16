import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_key,
  authDomain: "nailsbymel-b5522.firebaseapp.com",
  projectId: "nailsbymel-b5522",
  storageBucket: "nailsbymel-b5522.appspot.com",
  messagingSenderId: "63249946307",
  appId: "1:63249946307:web:b507fc7f589195474f7476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const bd = getFirestore(app);
const auth = getAuth(app)

export {auth}
