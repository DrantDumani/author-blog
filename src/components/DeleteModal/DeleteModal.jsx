import Button from "../Button/Button";

function DeleteModal({ closeModal, confirmHandler }) {
  return (
    <div>
      <Button btnText="X" clickHandler={closeModal} />
      <p>Are you sure you want to delete this content?</p>
      <Button btnText="Yes" clickHandler={confirmHandler} />

      <Button btnText="No" clickHandler={closeModal} />
    </div>
  );
}

export default DeleteModal;
