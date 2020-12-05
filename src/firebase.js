import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBYgRmyevz47HVN97kpksldqJRV-RKTdY",
    authDomain: "challenge-ac1e9.firebaseapp.com",
    databaseURL: "https://challenge-ac1e9.firebaseio.com",
    projectId: "challenge-ac1e9",
    storageBucket: "challenge-ac1e9.appspot.com",
    messagingSenderId: "231959772215",
    appId: "1:231959772215:web:d0bbdf18eb2f8300f093b2",
    measurementId: "G-8GRBZM8HJB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};