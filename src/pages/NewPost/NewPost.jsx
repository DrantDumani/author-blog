import Post from "../../components/Post/Post";
import { handleData } from "../../utils/actions";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const createPost = async (input, errHandler) => {
    const resp = await handleData("posts", input, "POST");
    const data = await resp.json();
    if (resp.ok) {
      navigate(`/post/${data.id}`);
    } else if (resp.status === 403) {
      errHandler(data);
    } else throw new Response("Error processing request");
  };

  const post = {};
  const navigate = useNavigate();
  return <Post post={post} submitHandler={createPost} />;
}

export default NewPost;
