import firebase from 'firebase';
const firebaseConfig = {

    apiKey: "AIzaSyDXaFgMga01t3kcKcGoojAKImaes7gFQNs",

    authDomain: "agenda-firestone.firebaseapp.com",

    projectId: "agenda-firestone",

    storageBucket: "agenda-firestone.appspot.com",

    messagingSenderId: "554559097218",

    appId: "1:554559097218:web:0c060dc7070d444b5ae79b",

    measurementId: "G-WRS6BPCGYF"

};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export { db }
