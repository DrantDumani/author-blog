const apiStr =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/"
    : "https://almagorge-blog-api.adaptable.app/";

export const getPosts = async () => {
  const token = localStorage.getItem("token");
  const resp = await fetch(apiStr + "posts/writer_posts", {
    mode: "cors",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (resp.ok) {
    const data = await resp.json();
    return data.posts || null;
  } else {
    console.log("oops");
    throw new Response("Error retrieving posts");
  }
};

export const getAllPosts = async () => {
  const token = localStorage.getItem("token");
  const resp = await fetch(apiStr + "posts/all", {
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

export const getPostsWithQuery = async ({ request }) => {
  const token = localStorage.getItem("token");
  const url = new URL(request.url);
  const resp = await fetch(apiStr + "posts?" + url.searchParams.toString(), {
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
  const resp = await fetch(`${apiStr}posts/${params.postId}/writer_post`, {
    mode: "cors",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (resp.ok) {
    const post = await resp.json();
    return post;
  } else throw new Response("Post not found");
};
