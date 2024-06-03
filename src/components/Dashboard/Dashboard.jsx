import PostCard from "../PostCard/PostCard";
import Button from "../Button/Button";
import { useLoaderData, Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const postList = useLoaderData() || [];

  return (
    <>
      <h1>Posts</h1>
      <div className={styles.postGrid}>
        {postList.map((post) => (
          <div key={post._id}>
            <PostCard
              title={post.title}
              subTitle={post.subTitle}
              date={post.timestamp}
              published={post.published}
            />
            <div>
              <Link to="/edit" state={{ isEdit: true }}>
                Edit
              </Link>
              <Button btnText="Delete" color="red"></Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
