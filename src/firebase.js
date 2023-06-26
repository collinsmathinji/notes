import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBrOXLjnlpSIxG82s4RjLpBvtjtL8dgWnE",
  authDomain: "react-notes-4e419.firebaseapp.com",
  projectId: "react-notes-4e419",
  storageBucket: "react-notes-4e419.appspot.com",
  messagingSenderId: "179618728861",
  appId: "1:179618728861:web:57361ce942b9491c5ebd74"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
