// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChObLjRc69XZcmbuf0fFL9xKVjXiAg2hg",
  authDomain: "instagram-9ac81.firebaseapp.com",
  projectId: "instagram-9ac81",
  storageBucket: "instagram-9ac81.appspot.com",
  messagingSenderId: "529190774926",
  appId: "1:529190774926:web:7a7935e86a8c14ad0901df"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();