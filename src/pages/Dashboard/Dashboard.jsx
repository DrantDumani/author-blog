import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

// the dashboard
function Dashboard() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Dashboard;
