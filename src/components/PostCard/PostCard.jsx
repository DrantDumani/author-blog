function PostCard({ title, subTitle, date, published }) {
  return (
    <article>
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <p>Date: {date}</p>
      {published ? <p>Published</p> : <p>Not Published</p>}
    </article>
  );
}

export default PostCard;
