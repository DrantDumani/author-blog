export const getPosts = async () => {
  // edit this to manage params later
  const resp = await fetch("http://localhost:3000/posts", { mode: "cors" });
  const data = await resp.json();
  if (resp.ok) {
    console.log(data.posts);
    return data.posts;
  } else {
    throw new Response("Error retrieving posts");
  }
};
