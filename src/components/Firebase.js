// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd70x3Hhit3ASI_B2dh4iMF7iLL592BcA",
  authDomain: "chatore-c9a9a.firebaseapp.com",
  projectId: "chatore-c9a9a",
  storageBucket: "chatore-c9a9a.firebasestorage.app",
  messagingSenderId: "1008176191927",
  appId: "1:1008176191927:web:c482a46d8b5804ea7db032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;