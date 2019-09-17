import firebase from "firebase";

export const config = {
    apiKey: "AIzaSyDv_Gmk9DJXOnH1ufexAJORy0ru3Nn-ejU",
    authDomain: "fir-app-1-60778.firebaseapp.com",
    databaseURL: "https://fir-app-1-60778.firebaseio.com",
    projectId: "fir-app-1-60778",
    storageBucket: "",
    messagingSenderId: "493848217073",
    appId: "1:493848217073:web:53e68423bd3ec9735b7050"
};

firebase.initializeApp(config);

export default firebase;