// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,addDoc,getDoc, getDocs,setDoc,doc } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUtTQeD_MBxkOxPsXHDef9N4sC76W_-TI",
  authDomain: "whatsapp-d971a.firebaseapp.com",
  projectId: "whatsapp-d971a",
  storageBucket: "whatsapp-d971a.appspot.com",
  messagingSenderId: "985067481354",
  appId: "1:985067481354:web:4c7d3b712ab5e1b5e172f3",
  measurementId: "G-Z4WKWEG65T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);







