import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Search from "../pages/Search/Search";
import EditPost from "../pages/EditPost/EditPost";
import NewPost from "../pages/NewPost/NewPost";
import ErrorPage from "../pages/Error/ErrorPage";
import NotAuthed from "../components/NotAuthed/NotAuthed";
import { getPosts, getSinglePost, getPostsWithQuery } from "../utils/loaders";

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
        loader: getPostsWithQuery,
      },
      {
        path: "/post/:postId",
        element: <EditPost />,
        loader: getSinglePost,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ],
  },
  {
    path: "/login",
    element: <NotAuthed />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
