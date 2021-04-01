import firebase from 'firebase/app';
import auth from 'firebase/auth';
import storage from 'firebase/storage'

firebase.initializeApp({
    apiKey: "AIzaSyDIZlDBE31LsU41Bh6QBZLX7FEvZ7WJggs",
    authDomain: "amitflashdev.firebaseapp.com",
    databaseURL: "https://amitflashdev-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "amitflashdev",
    storageBucket: "amitflashdev.appspot.com",
    messagingSenderId: "245814534700",
    appId: "1:245814534700:web:8539af8100b1f42dd1a789"
});

export default {
    firebase,
}
