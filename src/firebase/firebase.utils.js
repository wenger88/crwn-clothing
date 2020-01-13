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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (e) {
      console.error('error creating user', e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
