import { redirect } from "react-router-dom";

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

export const loginAction = async ({ request }) => {
  const token = localStorage.getItem("token");
  const formInput = await request.formData();
  const inputObj = Object.fromEntries(formInput);
  const resp = await fetch(apiStr + "users/loginAuthor", {
    method: "post",
    mode: "cors",
    body: JSON.stringify(inputObj),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await resp.json();
  if (resp.ok) {
    localStorage.setItem("token", data.token);
    return redirect("/");
  } else if (resp.status === 401) {
    return data.err;
  } else throw new Response("Internal Server Error");
};

export const createPost = async ({ request }) => {
  const token = localStorage.getItem("token");
  const formInput = await request.formData();
  const inputObj = Object.fromEntries(formInput);

  inputObj.tags = inputObj.tags.split(",");
  inputObj.published = Boolean(Number(inputObj.published));

  const resp = await fetch(apiStr + "posts", {
    method: "post",
    mode: "cors",
    body: JSON.stringify(inputObj),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const post = await resp.json();
  if (resp.ok) {
    const id = post._id;
    return redirect(`/post/${id}`);
  } else throw new Response("Error completing request");
};

export const editPost = async ({ request, params }) => {
  const token = localStorage.getItem("token");
  const formInput = await request.formData();
  const inputObj = Object.fromEntries(formInput);

  inputObj.tags = inputObj.tags.split(",");
  inputObj.published = Boolean(Number(inputObj.published));

  const resp = await fetch(apiStr + `posts/${params.postId}`, {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(inputObj),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const post = await resp.json();
  if (resp.ok) {
    const id = post._id;
    return redirect(`/post/${id}`);
  } else throw new Response("Error completing request");
};
