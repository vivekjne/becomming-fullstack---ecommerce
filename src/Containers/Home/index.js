import React from "react";

import Navbar from "../Navbar";
import Sidebar from "../../Components/Sidebar";
import styles from "./home.module.css";
function Home() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.bannerContainer} container`}>
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
