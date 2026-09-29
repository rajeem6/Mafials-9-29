// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD-_ng9OOxYl0W5VRDQPI94yyeNrqz4BM",
  authDomain: "mafials---firebase.firebaseapp.com",
  projectId: "mafials---firebase",
  storageBucket: "mafials---firebase.firebasestorage.app",
  messagingSenderId: "585166476799",
  appId: "1:585166476799:web:875b21c71ae8e5b0a843ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
