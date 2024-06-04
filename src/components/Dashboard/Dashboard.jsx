import PostCard from "../PostCard/PostCard";
import Button from "../Button/Button";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useLoaderData, Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useState } from "react";
import { handleData } from "../../utils/actions";

function Dashboard() {
  const [postList, setPostList] = useState(useLoaderData());
  const [showModal, setShowModal] = useState(false);
  const [currId, setCurrId] = useState("");

  const deletePost = async () => {
    const resp = await handleData(`posts/${currId}`, {}, "DELETE");
    const data = await resp.json();

    if (resp.ok) {
      if (data) {
        const newList = postList.filter((post) => post._id !== currId);
        setPostList(newList);
      } else return;
    } else throw new Response("There was en error processing your request.");
  };

  return (
    <>
      <h1>Posts</h1>
      <div className={styles.postGrid}>
        {postList.map((post) => (
          <div key={post._id}>
            <Link
              to={`/post/${post._id}`}
              state={{ isEdit: false, newPost: false }}
            >
              <PostCard
                title={post.title}
                subTitle={post.subTitle}
                date={post.timestamp}
                published={post.published}
              />
            </Link>
            <div>
              <Link
                to={`/post/${post._id}`}
                state={{ isEdit: true, newPost: false }}
              >
                Edit
              </Link>
              <Button
                btnText="Delete"
                color="red"
                clickHandler={() => {
                  setCurrId(post._id);
                  setShowModal(true);
                }}
              ></Button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <DeleteModal
          confirmHandler={() => {
            deletePost();
            setShowModal(false);
          }}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}

export default Dashboard;
