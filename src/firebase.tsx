// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBRisZvaH9vvgzM63oez-iTG1RxkdYkCfU',
  authDomain: 'react-firebase-login-284af.firebaseapp.com',
  projectId: 'react-firebase-login-284af',
  storageBucket: 'react-firebase-login-284af.appspot.com',
  messagingSenderId: '324187884252',
  appId: '1:324187884252:web:51a90cf764935df2158219',
  measurementId: 'G-Y6019Z4B4M',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
