import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs97KscnxjCJhAK2xtJGfCVMr0Yitu7Q0",
  authDomain: "stamp-ac9f6.firebaseapp.com",
  projectId: "stamp-ac9f6",
  storageBucket: "stamp-ac9f6.appspot.com",
  messagingSenderId: "552220446010",
  appId: "1:552220446010:web:5b836e4746096be0c15403",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
