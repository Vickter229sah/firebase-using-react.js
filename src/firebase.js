// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSeHULrlbIYfx-Rk_74d2GyMi6KjshlKk",
  authDomain: "react-auth-4d201.firebaseapp.com",
  projectId: "react-auth-4d201",
  storageBucket: "react-auth-4d201.appspot.com",
  messagingSenderId: "105663333055",
  appId: "1:105663333055:web:9c7981430ef7061541bc0a",
  measurementId: "G-4VMGGV13PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;