import firebase from "firebase";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

interface IAuthContext {
  currentUser: firebase.User | null;
  loginWithEmailPassword(email: string, password: string): Promise<firebase.auth.UserCredential>;
  loginWithGoogle(): Promise<firebase.auth.UserCredential>;
  registerEmailPassword(email: string, password: string): Promise<firebase.auth.UserCredential>;
  logout(): Promise<void>;
  resetPassword(email: string): Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface ChildProps {
  children: ReactNode;
}

const AuthContainer = ({ children }: ChildProps) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  function registerEmailPassword(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();
    return auth.signInWithPopup(provider);
  }

  function loginWithEmailPassword(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }

  function logout() {
    setCurrentUser(null);
    return auth.signOut();
  }

  const update = async (userId: string) => {};

  /**
   * Firebase basic stateChecking
   * Loads on mounting
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: firebase.User | null) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginWithGoogle,
        currentUser,
        registerEmailPassword,
        logout,
        loginWithEmailPassword,
        resetPassword,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContainer;
