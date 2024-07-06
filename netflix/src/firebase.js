// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCys1E67AnsEJdKUsHlVMh8WnLH4cVKlYw",
  authDomain: "netflix-bef7e.firebaseapp.com",
  projectId: "netflix-bef7e",
  storageBucket: "netflix-bef7e.appspot.com",
  messagingSenderId: "232067320784",
  appId: "1:232067320784:web:ccb9b6d0ef033289ae07d5",
  measurementId: "G-ME9RZ29CL3"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)