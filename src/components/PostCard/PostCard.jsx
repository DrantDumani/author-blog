import style from "./PostCard.module.css";

function PostCard({ title, subTitle, date, published }) {
  return (
    <article className={style.card}>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <p className={style.dateText}>Date: {date}</p>
      {published ? (
        <p className={style.pub}>Published</p>
      ) : (
        <p className={style.notPub}>Not Published</p>
      )}
    </article>
  );
}

export default PostCard;
