// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBH1BAJsQLfzsMgQ24Sax7jJMze78rzekY',
  authDomain: 'outshoetan.firebaseapp.com',
  projectId: 'outshoetan',
  storageBucket: 'outshoetan.appspot.com',
  messagingSenderId: '287976106616',
  appId: '1:287976106616:web:08666da643450badbb9b8d',
  measurementId: 'G-E7HZQLTCKG',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
