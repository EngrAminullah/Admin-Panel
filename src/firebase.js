import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYb2yIRl3Dnn3DPcq-vvf-prWbCsEpSOk",
  authDomain: "ammadmin-e2687.firebaseapp.com",
  projectId: "ammadmin-e2687",
  storageBucket: "ammadmin-e2687.appspot.com",
  messagingSenderId: "742471678594",
  appId: "1:742471678594:web:396f74dc10431f3d0fd29b",
  measurementId: "G-S4W9PD3YLS",
};

const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export const auth = getAuth();
// export const storage = getStorage(app);
