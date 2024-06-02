import { useState, useEffect } from "react";
import FormComponent from "../../components/Form/Form";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import Button from "../../components/Button/Button";
import styles from "./Login.module.css";
import { useActionData, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const err = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(window.atob(token.split(".")[1]));
      if (Date.now < payload.exp * 1000) {
        return false;
      } else {
        navigate("/");
      }
    }
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.title}>Log In</h1>
      <FormComponent>
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
