// v8
// import * as firebase from "firebase/app";
// import 'firebase/firestore';

// v9
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCTfMu-PVTq6qZ8E3U8b8LsNczTIwaTwXM",
  authDomain: "todo-e8c5f.firebaseapp.com",
  projectId: "todo-e8c5f",
  storageBucket: "todo-e8c5f.appspot.com",
  messagingSenderId: "823710539640",
  appId: "1:823710539640:web:2c7ca3f2a8cd4a85d7b28d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const db = getFirestore();

export { db }
