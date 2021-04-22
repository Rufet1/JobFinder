import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBvggDBTe8bYo2RzauLLI2cHqqJg1uWwYc",
    authDomain: "job-app-f7c59.firebaseapp.com",
    databaseURL: "https://job-app-f7c59.firebaseio.com",
    projectId: "job-app-f7c59",
    storageBucket: "job-app-f7c59.appspot.com",
    messagingSenderId: "119834706764",
    appId: "1:119834706764:web:83fdafc763bb052323c5e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()
  const fireStoreDB = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  const facebookAuthprovider = new firebase.auth.FacebookAuthProvider();


  export {database as default, googleAuthProvider,facebookAuthprovider, firebase,fireStoreDB}