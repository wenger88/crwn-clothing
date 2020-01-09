import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCkpLvGGCkj8zW8ZORV4PAMyWPjYvS0Xrc',
  authDomain: 'crwn-db-29783.firebaseapp.com',
  databaseURL: 'https://crwn-db-29783.firebaseio.com',
  projectId: 'crwn-db-29783',
  storageBucket: 'crwn-db-29783.appspot.com',
  messagingSenderId: '91697666048',
  appId: '1:91697666048:web:b27df31f76c6a1c5eda0e5',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
