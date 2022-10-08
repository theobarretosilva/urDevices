import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCZwMrwOyuqRsBW-812J8xC7YWgSCBKTUY",
    authDomain: "urdevices.firebaseapp.com",
    projectId: "urdevices",
    storageBucket: "urdevices.appspot.com",
    messagingSenderId: "927587492473",
    appId: "1:927587492473:web:eb5b1bac94d8c39a7b2aa8",
    measurementId: "G-0G0SSXVJS8"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);