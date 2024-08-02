import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'; // Import storage from Firebase
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0UAZv5Bx3W_B8OVVVvG8gTvrV9wDVxe0",
    authDomain: "cursus-3f7f3.firebaseapp.com",
    projectId: "cursus-3f7f3",
    storageBucket: "cursus-3f7f3.appspot.com",
    messagingSenderId: "100989314678",
    appId: "1:100989314678:web:b464e76eaa2e54e64de157",
    measurementId: "G-G2DH44HSW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

export { storage, db, analytics };
