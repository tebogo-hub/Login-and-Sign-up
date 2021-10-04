import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAymmd98dG1tnedr8tALPJQw1DbXScOr6Y",
    authDomain: "woon-studio.firebaseapp.com",
    projectId: "woon-studio",
    storageBucket: "woon-studio.appspot.com",
    messagingSenderId: "1088557629435",
    appId: "1:1088557629435:web:bf32d309f50e80b607d55e",
    measurementId: "G-BLKED6XE29"
  };

 
  firebase.initializeApp(firebaseConfig);
  

  export { firebase};