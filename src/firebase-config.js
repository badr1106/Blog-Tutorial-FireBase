// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5vbhoHkVmjAdmZtrhQ12BOMFPyexmDFY',
  authDomain: 'blog-project-2a6af.firebaseapp.com',
  projectId: 'blog-project-2a6af',
  storageBucket: 'blog-project-2a6af.appspot.com',
  messagingSenderId: '142875992863',
  appId: '1:142875992863:web:dd0b508a45edf9ed27c62a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
