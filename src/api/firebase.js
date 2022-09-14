import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDF_6sA-HSJ4W05TZTBx9zXphvi6DDDCCo",
    authDomain: "my-chat-b179b.firebaseapp.com",
    databaseURL: "https://my-chat-b179b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-chat-b179b",
    storageBucket: "my-chat-b179b.appspot.com",
    messagingSenderId: "947319513575",
    appId: "1:947319513575:web:345030bc2eb517b3221d42",
    measurementId: "G-95V6ER0D5S"
};

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase)
export const database = getDatabase(firebase)

