import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrqWigsoK7sSBJ2DudJtpAVk6JZiWpj5M",
  authDomain: "umkm-sukodadi-bandongan.firebaseapp.com",
  projectId: "umkm-sukodadi-bandongan",
  storageBucket: "umkm-sukodadi-bandongan.firebasestorage.app",
  messagingSenderId: "960483011884",
  appId: "1:960483011884:web:c7a63a6597ae7c26225089",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);