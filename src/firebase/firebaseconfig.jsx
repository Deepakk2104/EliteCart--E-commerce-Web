import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAIoNkm9x0mlFah_Edt--8Bzvh7XyLTUlY",
  authDomain: "e-commerce-webapp-d3b27.firebaseapp.com",
  projectId: "e-commerce-webapp-d3b27",
  storageBucket: "e-commerce-webapp-d3b27.appspot.com",
  messagingSenderId: "487351045650",
  appId: "1:487351045650:web:326a4dfe9b8258aff4d2cb"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };