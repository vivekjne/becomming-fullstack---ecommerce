import React from "react";
import styles from "./navbar.module.css";
export default class Navbar extends React.Component {
  render() {
    return (
      <div className={`container ${styles["nav-container"]}`}>
        <div className={`${styles["top-header"]}`}>
          <a className={styles.link}>USD</a>
          <span className={styles.link}>|</span>
          <a className={styles.link}>English</a>
          <span className={styles.link}>|</span>

          <span className={styles.link}>Welcome to Ecommerce</span>
          <span className={styles.link}>|</span>
          <a className={styles.link}>My Account</a>
          <span className={styles.link}>|</span>
          <a className={styles.link}>My Wishlist</a>
          <span className={styles.link}>|</span>
          <a className={styles.link}>Blog</a>
          <span className={styles.link}>|</span>
          <a className={styles.link}>contact</a>
          <span className={styles.link}>|</span>
          <a className={styles.link}>LOG IN</a>
        </div>
        <div className={styles["middle-header"]}>
          <span className={styles.brand}>ECOMMERCE</span>
          <input
            type="text"
            placeholder="search..."
            className={styles.searchInput}
          />
          <div>
            <h2 className="text-primary uppercase">Call us now</h2>
            <span className="text-big">+123456789</span>
          </div>
          <div className={styles.cart}>
            <i class={`fas fa-shopping-bag ${styles.cartIcon}`} />
            <i
              className={styles.arrow}
              class={`fas fa-chevron-down ${styles.arrow}`}
            />

            <div className={styles.dropdown} />
          </div>
        </div>
      </div>
    );
  }
}
