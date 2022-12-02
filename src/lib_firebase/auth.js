import {
  createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

/**

 */
export const registerFunction = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const registerGoogleFunction = () => {
  const provider = new GoogleAuthProvider();
  // const credential = provider.credentialFromResult(result);
  // const token = credential.accessToken;

  return signInWithPopup(auth, provider);
};

export const loginFunction = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const loginGoogleFunction = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider);
};

/*export const wallFunction = (user) => onAuthStateChanged (function callback(user));*/
