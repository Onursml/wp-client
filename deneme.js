

import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import { getDoc } from 'firebase/firestore';




export async  function   ekleDoc()  {


    await setDoc(doc(db, "onur", "whatsapp"), {
        afk: true,
        name: "onur",

        
      });
      console.log("Document written with ID: ");
}


export async function getirdoc() {
    const docRef = doc(db, "onur", "whatsapp");

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }


   
}


export async function setafk(){
    await updateDoc(doc(db, "onur", "whatsapp"), {
        afk: false,

      });
     


}
const data=await getirdoc();
console.log(data);