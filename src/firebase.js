import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlzAdOxTa6wnNBgOXokUSsbZnPC6n8txA",
  authDomain: "linkedin-clone-yt-34781.firebaseapp.com",
  projectId: "linkedin-clone-yt-34781",
  storageBucket: "linkedin-clone-yt-34781.appspot.com",
  messagingSenderId: "579722840633",
  appId: "1:579722840633:web:6f1777c75888328cfd1be8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
export default firebaseApp;
