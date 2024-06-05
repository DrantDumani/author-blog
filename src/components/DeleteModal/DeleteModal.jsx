import Button from "../Button/Button";
import style from "./DeleteModal.module.css";

function DeleteModal({ closeModal, confirmHandler }) {
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <Button btnText="X" clickHandler={closeModal} />
        <p>Are you sure you want to delete this content?</p>
        <div className={style.btnContainer}>
          <Button btnText="Yes" clickHandler={confirmHandler} />
          <Button color="Red" btnText="No" clickHandler={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
