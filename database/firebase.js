// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAg1byUc7oLakxgC54XRUgs-E0OGyouDlA",
    authDomain: "loginpage-fa137.firebaseapp.com",
    databaseURL: "https://loginpage-fa137.firebaseio.com",
    projectId: "loginpage-fa137",
    storageBucket: "loginpage-fa137.appspot.com",
    messagingSenderId: "992870614930",
    appId: "1:992870614930:web:6e3763009f71899e34234b",
    measurementId: "G-ZP727S9NZ4"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;

