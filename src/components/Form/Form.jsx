import styles from "./Form.module.css";
import { Form } from "react-router-dom";

function FormComponent({ children, method = "GET", action, submitHandler }) {
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {children}
    </form>
  );
}

export default FormComponent;
