import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2aWj0v9KY0zBJF7D9sN75wvuFsjPuvhE",
    authDomain: "catch-of-the-day-daynya-q.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-daynya-q.firebaseio.com",
    projectId: "catch-of-the-day-daynya-q",
    storageBucket: "catch-of-the-day-daynya-q.appspot.com",
    messagingSenderId: "117234207713",
    appId: "1:117234207713:web:475fbd47b590a3b3bc60a0"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;