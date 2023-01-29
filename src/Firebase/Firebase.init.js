// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAptAiTlThqE1quqT35AsEGgoWiLxh4BKE",
  authDomain: "linkedin-task.firebaseapp.com",
  projectId: "linkedin-task",
  storageBucket: "linkedin-task.appspot.com",
  messagingSenderId: "211969034749",
  appId: "1:211969034749:web:756ee7987abd91807ab194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;