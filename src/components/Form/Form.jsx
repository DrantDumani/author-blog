import styles from "./Form.module.css";
import { Form } from "react-router-dom";

function FormComponent({ children, method = "GET", action = "/" }) {
  return (
    <Form method={method} action={action} className={styles.form}>
      {children}
    </Form>
  );
}

export default FormComponent;
