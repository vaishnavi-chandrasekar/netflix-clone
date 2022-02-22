// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTLcnWYRnMGyAY3IqvEDspnEDyuL0JTcY",
  authDomain: "netflix-clone-f817a.firebaseapp.com",
  projectId: "netflix-clone-f817a",
  storageBucket: "netflix-clone-f817a.appspot.com",
  messagingSenderId: "421572629247",
  appId: "1:421572629247:web:b908315c4789173af6f2ca",
  measurementId: "G-SGD38T0XKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);