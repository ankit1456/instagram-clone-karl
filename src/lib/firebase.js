import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import {seedDatabase} from '../seed'

const config={
   apiKey: "AIzaSyBZ5IWKHdsukiZiYvMQNY-aeGxsC9a7-ZY",
  authDomain: "instagram-clone-karl-871b4.firebaseapp.com",
  projectId: "instagram-clone-karl-871b4",
  storageBucket: "instagram-clone-karl-871b4.appspot.com",
  messagingSenderId: "757853521822",
  appId: "1:757853521822:web:0d3f71109b175210d1388f",
  measurementId: "G-4001YRCSCB"
}

const Firebase=firebase.initializeApp(config)
const {FieldValue}=firebase.firestore

// seedDatabase(firebase)

export {Firebase,FieldValue}