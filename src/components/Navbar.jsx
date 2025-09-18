import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ cart, setSearchQuery, searchQuery }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className={styles.navbar}>
      <p className={styles.items}>
        <Link to="/">Home</Link> {" "}
      </p>
      <p className={styles.items}>
        <Link to="/products">Products</Link> {" "}
      </p>

      <input className={styles.items}
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <p className={styles.items}>Cart : {cart}  </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
