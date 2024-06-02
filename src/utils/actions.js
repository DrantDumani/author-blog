import { redirect } from "react-router-dom";

export const loginAction = async ({ request }) => {
  const formInput = await request.formData();
  const inputObj = Object.fromEntries(formInput);
  const resp = await fetch("http://localhost:3000/users/loginAuthor", {
    method: "post",
    mode: "cors",
    body: JSON.stringify(inputObj),
    headers: { "Content-Type": "application/json" },
  });
  const data = await resp.json();
  if (resp.ok) {
    localStorage.setItem("token", data.token);
    return redirect("/");
  } else if (resp.status === 401) {
    return data.err;
  } else throw new Response("Internal Server Error");
};
