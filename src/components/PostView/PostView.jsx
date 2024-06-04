import { Link } from "react-router-dom";

let tagCounter = 0;

function PostView({
  title,
  subTitle,
  content,
  isPublished,
  timestamp,
  edited_at,
  tags,
}) {
  return (
    <div>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}

      <p>
        {timestamp && isPublished ? `Published: ${timestamp}` : "Unpublished"}
      </p>
      {edited_at && <p>Edited: {edited_at}</p>}

      <p>{content}</p>
      <ul>
        {tags.map((tag) => (
          <li key={tagCounter++}>
            <Link to={`/search?tag=${tag}`}>#{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostView;
