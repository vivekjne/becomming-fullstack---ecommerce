import React from "react";
import styles from "./sidebar.module.css";
export default () => (
  <div className={styles.sidebarContainer}>
    <div className={styles.sidebarHeader}>Top Categories</div>
    <div className={styles.sidebarContent}>
      <span>Fashion</span>
    </div>

    <div className={styles.sidebarContent}>
      <span>Electronics</span>
    </div>

    <div className={styles.sidebarContent}>
      <span>gifts</span>
    </div>

    <div className={styles.sidebarContent}>
      <span>home &amp; garden</span>
    </div>

    <div className={styles.sidebarContent}>
      <span>Music</span>
    </div>

    <div className={styles.sidebarContent}>
      <span>Sports</span>
    </div>
  </div>
);
