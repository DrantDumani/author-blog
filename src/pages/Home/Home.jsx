import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

// the dashboard
function Home() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Home;
