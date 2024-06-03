import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Search from "../pages/Search/Search";
import Post from "../pages/Post/Post";
import ErrorPage from "../pages/Error/ErrorPage";
import { loginAction } from "../utils/actions";
import { getPosts } from "../utils/loaders";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: getPosts,
      },
      {
        element: <Search />,
        path: "/search",
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
    errorElement: <ErrorPage />,
  },
];

export default routes;
