// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo2t6BLHGkVPB-0d45Z3JJ-HoTmM_Gyj4",
  authDomain: "internfair-edcdc.firebaseapp.com",
  projectId: "internfair-edcdc",
  storageBucket: "internfair-edcdc.appspot.com",
  messagingSenderId: "339672087335",
  appId: "1:339672087335:web:a234f7affcb369dba98702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;