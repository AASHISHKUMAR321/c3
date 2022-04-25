import { useEffect } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api
  const { auth, Auth } = useContext(AuthContext);

  useEffect(() => {
    Auth("", false);
  }, []);
  if (auth.status) {
    return <Navigate to={"/"}></Navigate>;
  }

  return <div></div>;
};
