import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBY8ZcTtxba7TaISKUnujzhhQuIyN50fEA",
  authDomain: "miniblog-curso-react.firebaseapp.com",
  projectId: "miniblog-curso-react",
  storageBucket: "miniblog-curso-react.appspot.com",
  messagingSenderId: "163358963220",
  appId: "1:163358963220:web:dcb4cd60408dd038955901"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export {db};