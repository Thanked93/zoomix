import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import firebase from "firebase";
import { auth } from "../../firebase";

interface IAuthContext {
  currentUser: firebase.User | null;
  loginWithEmailPassword(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential>;
  registerEmailPassword(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential>;
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

  /**
   * Firebase basic stateChecking
   * Loads on mounting
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user: firebase.User | null) => {
        setCurrentUser(user);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
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
