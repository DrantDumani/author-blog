import { useId } from "react";
import styles from "./InputWrapper.module.css";
import PropTypes from "prop-types";

function InputWrapper({
  label,
  handleInput,
  value,
  type = "text",
  name,
  isRequired,
}) {
  const id = useId();

  const labelEl = (
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  );

  const input = (
    <input
      className={styles.input}
      id={id}
      name={name}
      value={value}
      onInput={handleInput}
      type={type}
      required={isRequired}
    />
  );
  return (
    <>
      {type !== "checkbox" ? (
        <div className={styles.colWrapper}>
          {labelEl}
          {input}
        </div>
      ) : (
        <div className={styles.rowWrapper}>
          {input}
          {labelEl}
        </div>
      )}
    </>
  );
}

InputWrapper.proptypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  handleInput: PropTypes.func,
  type: PropTypes.text,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default InputWrapper;
