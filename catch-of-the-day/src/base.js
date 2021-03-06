import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDW4IPHI9jLL19W-W-B5p8_BPTWfXZa9ng",
    authDomain: "catch-of-the-day-sean-lawrence.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-sean-lawrence.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;