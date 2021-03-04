// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCD63ZZpGnmguJrf5_GxguOlHfk0g6B-jI",
    authDomain: "slack-clone-5f21f.firebaseapp.com",
    projectId: "slack-clone-5f21f",
    storageBucket: "slack-clone-5f21f.appspot.com",
    messagingSenderId: "329102623368",
    appId: "1:329102623368:web:b2382836b7d05fa0e0d53d",
    measurementId: "G-93R8SG0RKJ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };