import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzoXXOcHLoD4RAK_jFG85QTFc2hcssohA",
  authDomain: "netflix-4141d.firebaseapp.com",
  projectId: "netflix-4141d",
  storageBucket: "netflix-4141d.appspot.com",
  messagingSenderId: "89281438791",
  appId: "1:89281438791:web:f08941a1dbcdcba1b4fd62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);