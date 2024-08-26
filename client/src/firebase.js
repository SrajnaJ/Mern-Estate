// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estates-here.firebaseapp.com",
  projectId: "estates-here",
  storageBucket: "estates-here.appspot.com",
  messagingSenderId: "645319796423",
  appId: "1:645319796423:web:fed85f402d31463c7ec0e2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
