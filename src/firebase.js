import Firebase from 'firebase'

/**
 * Pega aquí los datos de tu proyecto firebase
 */
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyAW9McMezpeYACOe79mfLRT7i0LXLWMGO4",
    authDomain: "info-series.firebaseapp.com",
    databaseURL: "https://info-series.firebaseio.com",
    projectId: "info-series",
    storageBucket: "",
    messagingSenderId: "793556357500"
});

export const db = firebaseApp.database()
export const storage = firebaseApp.storage()
export const auth = firebaseApp.auth()