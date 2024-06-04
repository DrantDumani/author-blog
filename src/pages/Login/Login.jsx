import { useState } from "react";
import FormComponent from "../../components/Form/Form";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import Button from "../../components/Button/Button";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { handleData } from "../../utils/actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const input = { email, password };
    const resp = await handleData("users/loginAuthor", input, "POST");

    const data = await resp.json();
    if (resp.ok) {
      localStorage.setItem("token", data.token);
      console.log("Sure");
      navigate("/");
    } else if (resp.status === 401) {
      setErr(data.err);
    } else throw new Response("Internal Server Error");
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.title}>Log In</h1>
      <FormComponent submitHandler={handleLogin}>
        <InputWrapper
          label="Email:"
          value={email}
          type="email"
          name="email"
          handleInput={handleEmail}
          isRequired={true}
        />
        <InputWrapper
          label="Password:"
          value={password}
          type="password"
          name={"password"}
          handleInput={handlePassword}
          isRequired={true}
        />
        <Button type="submit" btnText="Log In" />
      </FormComponent>
      {err && <p>{err}</p>}
    </div>
  );
}

export default Login;
