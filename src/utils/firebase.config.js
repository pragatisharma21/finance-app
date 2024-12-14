// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcjxS0usFNRor9AScuPoJjHrtw5H7Ry7M",
  authDomain: "finance-app-6a3ed.firebaseapp.com",
  databaseURL: "https://finance-app-6a3ed-default-rtdb.firebaseio.com",
  projectId: "finance-app-6a3ed",
  storageBucket: "finance-app-6a3ed.firebasestorage.app",
  messagingSenderId: "690185354182",
  appId: "1:690185354182:web:640b85407880faac1d50c7",
  measurementId: "G-0CZ4KV8FEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database } 