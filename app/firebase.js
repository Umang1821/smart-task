

import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAP2xlFq0oSNHGJX9fmBasRvPaUja2c-ac",
  authDomain: "todo-app-65125.firebaseapp.com",
  projectId: "todo-app-65125",
  storageBucket: "todo-app-65125.firebasestorage.app",
  messagingSenderId: "704847529237",
  appId: "1:704847529237:web:5d7c176d1812cdc5c9d51c",
  measurementId: "G-3PHSR2JWNK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export {auth,db};



