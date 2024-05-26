import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGRnJlME_AB9Ag0j6F_jpYUJ6yzLtmhL8",
  authDomain: "connectyou-c1857.firebaseapp.com",
  projectId: "connectyou-c1857",
  storageBucket: "connectyou-c1857.appspot.com",
  messagingSenderId: "30177462260",
  appId: "1:30177462260:web:97fbaa50acb51245dedba1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
