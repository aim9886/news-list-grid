import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfvdMecgOnAIYiz2xSRea1opalbPbNCoM",
    authDomain: "newsproject-143a8.firebaseapp.com",
    projectId: "newsproject-143a8",
    storageBucket: "newsproject-143a8.appspot.com",
    messagingSenderId: "153449682307",
    appId: "1:153449682307:web:8ba0bccea7ef7f3af8d2b6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);