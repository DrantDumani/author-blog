import { Link } from "react-router-dom";
import style from "./PostView.module.css";
import { humanReadable } from "../../utils/humanDate";
import parse from "html-react-parser";
import { useEffect } from "react";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/github.css";

function PostView({
  title,
  subTitle,
  content,
  isPublished,
  timestamp,
  edited_at,
  tags,
}) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      {subTitle && <h2 className={style.subTitle}>{subTitle}</h2>}

      <p className={style.time}>
        {timestamp && isPublished
          ? `Published: ${humanReadable(timestamp)}`
          : "Unpublished"}
      </p>
      {edited_at && (
        <p className={style.time}>Edited: {humanReadable(edited_at)}</p>
      )}

      <div>{parse(content)}</div>
      <ul className={style.tagWrapper}>
        {tags.map((tag, ind) => (
          <li key={ind}>
            <Link
              className={style.tagLink}
              to={`/search?tag=${tag.replaceAll(" ", "+")}`}
            >
              #{tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostView;
