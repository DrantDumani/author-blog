import { useLoaderData, useParams } from "react-router-dom";
import { handleData } from "../../utils/actions";
import Post from "../../components/Post/Post";

function EditPost() {
  const post = useLoaderData();
  const { postId } = useParams();

  const editPost = async (input, errHandler) => {
    const resp = await handleData(`posts/${postId}`, input, "PUT");
    const data = await resp.json();
    if (resp.ok) {
      return;
    } else if (resp.status === 403) {
      errHandler(data);
    } else throw new Response("Error processing request");
  };

  return <Post post={post} submitHandler={editPost} />;
}

export default EditPost;
