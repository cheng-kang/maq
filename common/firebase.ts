// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh3Z0Mne0BAjCaZqWWeNYmloxD4lD20vI",
  authDomain: "maianqiao.firebaseapp.com",
  projectId: "maianqiao",
  storageBucket: "maianqiao.appspot.com",
  messagingSenderId: "752427948764",
  appId: "1:752427948764:web:9c11854e508a0747637219",
  measurementId: "G-TG4KSNY8HH",
};

export function initializeFirebase() {
  return initializeApp(firebaseConfig);
}
