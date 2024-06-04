export const getPosts = async () => {
  const token = localStorage.getItem("token");
  const resp = await fetch("http://localhost:3000/posts", {
    mode: "cors",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (resp.ok) {
    const data = await resp.json();
    return data.posts;
  } else {
    throw new Response("Error retrieving posts");
  }
};

export const getSinglePost = async ({ params }) => {
  const token = localStorage.getItem("token");
  const resp = await fetch(`http://localhost:3000/posts/${params.postId}`, {
    mode: "cors",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (resp.ok) {
    const post = await resp.json();
    return post;
  } else throw new Response("Post not found");
};
