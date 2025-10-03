// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdc53yWz8Lsri6LH0gqfiyQoxq0AoMsjs",
    authDomain: "wedding-ceremony-36a7d.firebaseapp.com",
    projectId: "wedding-ceremony-36a7d",
    storageBucket: "wedding-ceremony-36a7d.firebasestorage.app",
    messagingSenderId: "853745532595",
    appId: "1:853745532595:web:2b65852346fda42a7efac6",
    measurementId: "G-8DBBKSVWWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services you use
export const db = getFirestore(app);
export const storage = getStorage(app);

