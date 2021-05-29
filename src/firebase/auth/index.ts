import { auth } from "../../firebase";
import firebase from "firebase";

export function registerEmailPassword(email: string, password: string) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.useDeviceLanguage();
  return auth.signInWithPopup(provider);
}

export function loginWithEmailPassword(email: string, password: string) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function resetPassword(email: string) {
  return auth.sendPasswordResetEmail(email);
}

export function logout() {
  return auth.signOut();
}
