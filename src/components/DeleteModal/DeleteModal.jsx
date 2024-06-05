import Button from "../Button/Button";
import { useFetcher } from "react-router-dom";
import style from "./DeleteModal.module.css";

function DeleteModal({ closeModal, btnName, btnValue }) {
  const fetcher = useFetcher();

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <Button btnText="X" clickHandler={closeModal} />
        <p>Are you sure you want to delete this content?</p>
        <fetcher.Form method="DELETE" className={style.btnContainer}>
          <Button btnText="Yes" type="submit" name={btnName} value={btnValue} />
          <Button color="Red" btnText="No" clickHandler={closeModal} />
        </fetcher.Form>
      </div>
    </div>
  );
}

export default DeleteModal;
