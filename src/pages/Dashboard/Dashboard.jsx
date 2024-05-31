import { Outlet } from "react-router-dom";

// the dashboard
function Dashboard() {
  return (
    <>
      <h1>lamo this is the dashboard page</h1>
      <Outlet />
    </>
  );
}

export default Dashboard;
