import firebase from "firebase";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { getUserData } from "../../firebase/collection";
import { Friend, IAuthContext, Room } from "./interfaces";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface ChildProps {
  children: ReactNode;
}

const AuthContainer = ({ children }: ChildProps) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [room, setRoom] = useState<Room>({} as Room);
  const [friends, setFriends] = useState<Array<Friend>>([] as Array<Friend>);
  const [loading, setLoading] = useState(true);

  /**
   * Firebase basic stateChecking
   * Loads on mounting
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: firebase.User | null) => {
      setCurrentUser(user);
      if (user) {
        const { room, friends, password } = await getUserData(user);
        setFriends([friends]);
        setRoom({ room, password });
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        room,
        friends,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContainer;
