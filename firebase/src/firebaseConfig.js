import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7E8DbMXGNwMJqsgUY2Jog3DMe083rb28",
  authDomain: "fir-learnings-b8739.firebaseapp.com",
  projectId: "fir-learnings-b8739",
  storageBucket: "fir-learnings-b8739.appspot.com",
  messagingSenderId: "1053835486671",
  appId: "1:1053835486671:web:d3801884791f4814ab1eba"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);