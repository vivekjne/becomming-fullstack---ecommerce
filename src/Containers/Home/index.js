import React from "react";

import Navbar from "../Navbar";
import Sidebar from "../../Components/Sidebar";
import styles from "./home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Home() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.bannerContainer} container`}>
        <Sidebar />
        <div style={{ height: "100%" }}>
          <Carousel showThumbs={false} autoPlay>
            <div>
              <img
                style={{ height: "24rem" }}
                src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img
                style={{ height: "24rem" }}
                src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
              />

              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img
                style={{ height: "24rem" }}
                src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
              />

              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className={styles.promiseContainer}>
        <div>
          <h4>Free shipping &amp; return</h4>
          <p>Free shipping on all orders over $99.</p>
        </div>

        <div>
          <h4>MONEY BACK GUARANTEE</h4>
          <p>100% money back guarantee</p>
        </div>

        <div>
          <h4>ONLINE SUPPORT 24/7</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
