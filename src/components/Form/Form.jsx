import styles from "./Form.module.css";
import PropTypes from "prop-types";

function FormComponent({ children, submitHandler }) {
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {children}
    </form>
  );
}

FormComponent.propTypes = {
  children: PropTypes.node,
  submitHandler: PropTypes.func,
};

export default FormComponent;
