import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAgR3Rs6oVQSXhC_NpdBjzctRrASm2JxPs",
  authDomain: "auth-development-79063.firebaseapp.com",
  projectId: "auth-development-79063",
  storageBucket: "auth-development-79063.appspot.com",
  messagingSenderId: "847254544901",
  appId: "1:847254544901:web:1a7140c4c27fbe0ea4f26c"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);

export const storage=getStorage(app)