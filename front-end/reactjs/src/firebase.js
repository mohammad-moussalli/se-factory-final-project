import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-W8nuhgszpCkf0CqxWQGH4kXyGSdArlE",
  authDomain: "kaffi-project.firebaseapp.com",
  projectId: "kaffi-project",
  storageBucket: "gs://kaffi-project.appspot.com",
  messagingSenderId: "884089590617",
  appId: "1:884089590617:web: '23ffbd6d7275d23315f248'",
  measurementId: "G-LLYVEJH9WW",
};
  
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseConfig.storageBucket);
  
const db = firebase.firestore();

export default { storage, db };