import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return <h1>This is the login page, nerd.</h1>;
}

export default Login;
