import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: "", status: false });

  const Auth = (token, status) => {
    setAuth({ ...auth, token: token, status: status });
  };

  return (
    <AuthContext.Provider value={{ Auth, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
