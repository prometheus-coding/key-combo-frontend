import React from "react";
import styles from '../page.module.css'
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-background-image"]}>
        <div className={styles["navbar-container"]}>
          <div className={styles["navbar-links"]}>
            <div className={styles["nav-item"]}>Home</div>
            <div className={styles["nav-item"]}>Leaderboard</div>
            <div className={styles["nav-item"]}>Community</div>
            <div className={styles["nav-item"]}>Info</div>
          </div>
          <div className={styles["navbar-logo-container"]}>
            <img src="" alt="logo" className={styles["navbar-logo"]} />
          </div>
          <div className={styles["navbar-user-container"]}>
            <div className={styles["navbar-user-name"]}>User</div>
            <div className={styles["navbar-img-container"]}>
              <img src="" alt="logo" className={styles["user-profile-img"]} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
