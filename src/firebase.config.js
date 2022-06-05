import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqrTfeCcGPMpRNJffnlC3yVl3DOe2NOzw",
  authDomain: "restaurantapp-2e605.firebaseapp.com",
  databaseURL: "https://restaurantapp-2e605-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-2e605",
  storageBucket: "restaurantapp-2e605.appspot.com",
  messagingSenderId: "919442046880",
  appId: "1:919442046880:web:5863abdeb0d3df01176ec5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
