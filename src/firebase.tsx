import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5WblXbB9ShbrrrZ3lRUByc7NPjtG-QF0",
  authDomain: "react-auth-d8502.firebaseapp.com",
  projectId: "react-auth-d8502",
  storageBucket: "react-auth-d8502.appspot.com",
  messagingSenderId: "743370297798",
  appId: "1:743370297798:web:ad034afc66b00e2298e2c7",
  measurementId: "G-BWHGR7M1MP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app;
