import React from "react";
import { useParams } from "react-router-dom";

const Login = () => {
  const { slug } = useParams();

  return <h1>Login {slug}</h1>;
};

export default Login;
