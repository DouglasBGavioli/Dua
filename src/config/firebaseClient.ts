import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyCWTcvfDfv6T_UE3NF-5pEm5KhvEfDzVII",
    authDomain: "divisaourutu.firebaseapp.com",
    projectId: "divisaourutu",
    storageBucket: "divisaourutu.appspot.com",
    messagingSenderId: "562786537514",
    appId: "1:562786537514:web:034c95d9438618f6737353"
}
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);