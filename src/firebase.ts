import firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBZ51FS6lYee3KDzHmp5eYZ0nAmiJ_PEsQ',
  authDomain: 'trainer-cube.firebaseapp.com',
  databaseURL: 'https://trainer-cube.firebaseio.com',
  projectId: 'trainer-cube',
  storageBucket: 'trainer-cube.appspot.com',
  messagingSenderId: '725167384251',
  appId: '1:725167384251:web:b37acdd7b979e1a2676b9e',
  measurementId: 'G-D8V4779EQK'
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDoc = async(user: any, additionalData?: any) => {
  if (!user) return;
  const userRef = firestore.doc(`/users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, email, photoURL, createdAt, ...additionalData
      });
    } catch(error) {
      console.error('Error creating user', error.message);
    }
  }
  return getUserDoc(user.uid);
};

export const getUserDoc = async (uid: string) => {
  if(!uid) return null;
  try {
    const doc = await firestore.collection('users').doc(uid).get();
    return { uid, ...doc.data() };
  } catch (error) {
    console.error('Error fetching data', error.message);
  }
};

export default firebase;