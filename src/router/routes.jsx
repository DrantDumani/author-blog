import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Search from "../pages/Search/Search";
import Post from "../pages/Post/Post";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
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
  },
];

export default routes;
