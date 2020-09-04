import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyDBK3nAoVyDf9CpNCBPUFW2R4rpffhTPCY",
   authDomain: "twitter-clone-92301.firebaseapp.com",
   databaseURL: "https://twitter-clone-92301.firebaseio.com",
   projectId: "twitter-clone-92301",
   storageBucket: "twitter-clone-92301.appspot.com",
   messagingSenderId: "387709301969",
   appId: "1:387709301969:web:e49ef9637e9c21ea6201f0"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

 export default db;
 