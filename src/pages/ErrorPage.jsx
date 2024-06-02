import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  return <h1>Error: {err.data}</h1>;
}

export default ErrorPage;
