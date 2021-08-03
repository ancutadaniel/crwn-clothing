import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBOTrNJjBcOFIcryl0PPVCYg3a4q9BCV9k',
  authDomain: 'crown-db-ce483.firebaseapp.com',
  projectId: 'crown-db-ce483',
  storageBucket: 'crown-db-ce483.appspot.com',
  messagingSenderId: '719904636292',
  appId: '1:719904636292:web:6061e14bae68f267c731d1',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
