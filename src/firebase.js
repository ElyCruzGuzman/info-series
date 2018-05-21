import Firebase from 'firebase'

/**
 * Pega aquí los datos de tu proyecto firebase
 */
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyB2KfHdiDP2-rTusDL-Sj8Pfz29pPUzgo0",
    authDomain: "mis-series-7.firebaseapp.com",
    databaseURL: "https://mis-series-7.firebaseio.com",
    projectId: "mis-series-7",
    storageBucket: "",
    messagingSenderId: "665941432205"
});

export const db = firebaseApp.database()
console.log(db)
export const storage = firebaseApp.storage()
console.log(storage)
export const auth = firebaseApp.auth()
console.log(auth)