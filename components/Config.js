import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBPsCr1HnPj2e7HjlrtmEzIFzKakZ64nXs",
  authDomain: "duck-hunt-64c51.firebaseapp.com",
  projectId: "duck-hunt-64c51",
  storageBucket: "duck-hunt-64c51.appspot.com",
  messagingSenderId: "1032681343247",
  appId: "1:1032681343247:web:3be8d14ac7cee4a203567a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
