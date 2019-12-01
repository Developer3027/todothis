import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAZKJJVuohweDFMKbkIUfAfaeBrxujV_IY",
    authDomain: "todothis-77eac.firebaseapp.com",
    databaseURL: "https://todothis-77eac.firebaseio.com",
    projectId: "todothis-77eac",
    storageBucket: "todothis-77eac.appspot.com",
    messagingSenderId: "481842980431",
    appId: "1:481842980431:web:262e2d7ce715cc93ebac3a",
    measurementId: "G-TM7DWWSVJZ"
});

export { firebaseConfig as firebase };