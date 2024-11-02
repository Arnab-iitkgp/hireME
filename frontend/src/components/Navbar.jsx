import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src="/image/logo.png" alt="hireME Logo" className={styles.logo} />
      </div>
      <div className={styles.navbarBrand}>
        <h1>
          HireME <span className={styles.tagline}> ____Get Hired Soon...</span>
        </h1>

        <h3></h3>
      </div>
      <div className={styles.navbarRight}>
        {/* <h3>get hired soon</h3> */}
        {/* <input
          type="text"
          placeholder="Search job titles or locations..."
          className={styles.searchBar}
        /> */}
        <a href="" className={styles.links}>
          Contact
        </a>
        <a href="" className={styles.links}>
          About
        </a>
        <a href="" className={styles.links}>
          Testimonials
        </a>
        <a href="" className={styles.links}></a>
        <button className={styles.navButton}>SignUp</button>
        <button className={styles.navButton}>Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
