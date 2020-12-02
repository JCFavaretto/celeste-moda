import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAzxIDwtu95AeSQBk1l_y5FmxNN3dlIM6k",
  authDomain: "celeste-moda.firebaseapp.com",
  databaseURL: "https://celeste-moda.firebaseio.com",
  projectId: "celeste-moda",
  storageBucket: "celeste-moda.appspot.com",
  messagingSenderId: "298619011566",
  appId: "1:298619011566:web:b10d7aa40d1d0734174eff",
  measurementId: "G-G1KC5LTJ48",
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
