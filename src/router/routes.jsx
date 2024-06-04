import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import Search from "../pages/Search/Search";
import EditPost from "../pages/EditPost/EditPost";
import NewPost from "../pages/NewPost/NewPost";
import ErrorPage from "../pages/Error/ErrorPage";
import NotAuthed from "../components/NotAuthed/NotAuthed";
import { loginAction, createPost, editPost } from "../utils/actions";
import { getPosts, getSinglePost } from "../utils/loaders";

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
        path: "/post/:postId",
        element: <EditPost />,
        loader: getSinglePost,
        action: editPost,
      },
      {
        path: "/new",
        element: <NewPost />,
        // action: createPost,
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
        // action: loginAction,
      },
    ],
  },
];

export default routes;
