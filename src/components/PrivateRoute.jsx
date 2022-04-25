import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  if (auth.status) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
