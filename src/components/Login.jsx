import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  //  use reqres to log user in.
  const location = useLocation();

  const [user, setUser] = useState({ username: "", password: "" });
  const navi = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const { Auth, auth } = useContext(AuthContext);

  // {
  //   auth.status ? (
  //     <Navigate to={"/admin"} />
  //   ) : (
  //     <Navigate to={"/login"}></Navigate>
  //   );
  // }

  return (
    <form
      className="loginform"
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .post(`https://reqres.in/api/login`, user)
          .then(({ data }) => Auth(data.token, true));
      }}
    >
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={inputHandler}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={inputHandler}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
