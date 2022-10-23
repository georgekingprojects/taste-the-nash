// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9caijcru7R0BaD4PfzQPcQMYIutVXUkE",
  authDomain: "taste-the-nash-98281.firebaseapp.com",
  projectId: "taste-the-nash-98281",
  storageBucket: "taste-the-nash-98281.appspot.com",
  messagingSenderId: "362026736089",
  appId: "1:362026736089:web:33283b1c6f4c0b84cf21c8",
};

// Initialize Firebase and cloud storage
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
