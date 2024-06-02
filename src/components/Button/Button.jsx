import styles from "./Button.module.css";

function Button({
  color = "Default",
  clickHandler = () => {},
  type = "button",
  btnText,
}) {
  return (
    <button className={styles["btnDefault"]} type={type} onClick={clickHandler}>
      {btnText}
    </button>
  );
}

export default Button;
