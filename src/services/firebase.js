import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "nailsbymel-b5522.firebaseapp.com",
  projectId: "nailsbymel-b5522",
  storageBucket: "nailsbymel-b5522.appspot.com",
  messagingSenderId: "63249946307",
  appId: "1:63249946307:web:b507fc7f589195474f7476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const bd = getFirestore(app);
export {app}