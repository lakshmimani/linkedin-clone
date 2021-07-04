import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCwTKVN3PJ6KzkEdbFXcnhW2ww3E2DwVaI',
  authDomain: 'linkedin-clone-a31a4.firebaseapp.com',
  projectId: 'linkedin-clone-a31a4',
  storageBucket: 'linkedin-clone-a31a4.appspot.com',
  messagingSenderId: '154135998699',
  appId: '1:154135998699:web:6bd975e026f829767b4eae',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
