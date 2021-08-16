import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDk6knUJYd4pAdow7MC6c75bCBvEUjy7fo",
    authDomain: "challenge-61a60.firebaseapp.com",
    projectId: "challenge-61a60",
    storageBucket: "challenge-61a60.appspot.com",
    messagingSenderId: "93319267293",
    appId: "1:93319267293:web:617d73e8ec301f6ba5ec34"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }