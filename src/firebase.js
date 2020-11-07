import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCt1BCAQa-sPfx59-K-ifCvR8Uw8AaWbS8",
  authDomain: "ig-reels-ebc79.firebaseapp.com",
  databaseURL: "https://ig-reels-ebc79.firebaseio.com",
  projectId: "ig-reels-ebc79",
  storageBucket: "ig-reels-ebc79.appspot.com",
  messagingSenderId: "872797215658",
  appId: "1:872797215658:web:82da521643c4693983a9d3",
  measurementId: "G-1M65N9NWYG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
