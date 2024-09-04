import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({
  color = "Default",
  clickHandler = () => {},
  type = "button",
  btnText,
  name = "",
  value = undefined,
}) {
  return (
    <button
      className={styles[`btn${color}`]}
      type={type}
      onClick={clickHandler}
      name={name}
      value={value}
    >
      {btnText}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  clickHandler: PropTypes.func,
  type: PropTypes.string,
  btnText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
