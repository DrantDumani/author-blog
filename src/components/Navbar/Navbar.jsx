import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link className={`${styles.logo} ${styles.navLink}`} to="/">
            Almagorge
          </Link>
        </li>
        <li className={styles.marLeft}>
          <Link
            className={styles.navLink}
            to="/new"
            state={{ isEdit: true, newPost: true }}
          >
            New Post
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/login" onClick={logout}>
            Sign Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
