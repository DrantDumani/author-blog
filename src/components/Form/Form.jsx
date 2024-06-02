import styles from "./Form.module.css";
import { Form } from "react-router-dom";

function FormComponent({ children, submitHandler = () => {} }) {
  return (
    <Form
      method="post"
      action="/login"
      className={styles.form}
      // onSubmit={submitHandler}
    >
      {children}
    </Form>
  );
}

export default FormComponent;
