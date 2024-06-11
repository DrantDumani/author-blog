import styles from "./Button.module.css";

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

export default Button;
