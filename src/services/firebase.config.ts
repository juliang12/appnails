import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAmfwSw63wllBsFtj55uho-s_HvyGQFIcs",
  authDomain: "nails-26e10.firebaseapp.com",
  projectId: "nails-26e10",
  storageBucket: "nails-26e10.appspot.com",
  messagingSenderId: "983178571961",
  appId: "1:983178571961:web:521d3ef5fc29eacee9eb68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const bd = getFirestore(app);
const auth = getAuth(app)

export {auth}
