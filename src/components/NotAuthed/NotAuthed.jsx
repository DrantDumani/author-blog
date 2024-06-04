import { Outlet, Navigate } from "react-router-dom";
import { getJwtFromLS } from "../../utils/jwtFunctions";

function NotAuthed() {
  return getJwtFromLS() ? <Navigate to="/" replace={true} /> : <Outlet />;
}

export default NotAuthed;
