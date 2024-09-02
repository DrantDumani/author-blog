import { Outlet, useLocation, Navigate, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { getJwtFromLS } from "../../utils/jwtFunctions";

function Home() {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const [token, setToken] = useState(getJwtFromLS());

  useEffect(() => {
    setToken(getJwtFromLS);
  }, [pathname]);

  return token ? (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main
        className={`${styles.main} ${
          navigation.state === "loading" ? styles.loading : null
        }`}
      >
        {<Outlet />}
      </main>
    </>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}

export default Home;
