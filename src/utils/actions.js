// const apiStr = "https://almagorge-blog-api.adaptable.app/";
const apiStr = "http://localhost:3000/";

export const handleData = async (
  endPoint,
  input = undefined,
  method = "GET"
) => {
  const token = localStorage.getItem("token");
  const options = {
    mode: "cors",
    method: method,
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(apiStr + endPoint, options);
};

export const deletePost = async ({ request }) => {
  const formData = await request.formData();
  const { postId } = Object.fromEntries(formData);
  const resp = await handleData("posts/" + postId, {}, request.method);

  if (resp.ok) {
    return true;
  } else throw new Response("Error completing request");
};
