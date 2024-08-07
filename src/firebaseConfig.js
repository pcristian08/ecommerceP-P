import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.AUTH,
  projectId: import.meta.env.PROJECT,
  storageBucket: import.meta.env.STORAGE,
  messagingSenderId: import.meta.env.MESSAGE,
  appId: import.meta.env.APPID,
};

const app = initializeApp(firebaseConfig);

// Obtener base de datos
export const dataBase = getFirestore(app);

// Obtener la auntenticacion
