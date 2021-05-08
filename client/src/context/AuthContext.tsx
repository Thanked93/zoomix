import React, { ReactNode, useContext, useState } from "react";
import axios from "../axios/instance";

interface IAuthContext {
  loggedIn: boolean;
  register(username: string, password: string): Promise<string>;
  login(username: string, password: string): Promise<string>;
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedIn, setLoggedIn] = useState(false);

  async function login(username: string, password: string): Promise<string> {
    return await axios
      .post("/login", { username, password })
      .then((res) => {
        setLoggedIn(true);

        return "success";
      })
      .catch((err) => {
        return err.message;
      });
  }

  async function register(username: string, password: string): Promise<string> {
    return await axios
      .post("/register", { username, password })
      .then((res) => {
        //Do login stuff
        setLoggedIn(true);
        return "success";
      })
      .catch((err) => {
        return err.message;
      });
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
