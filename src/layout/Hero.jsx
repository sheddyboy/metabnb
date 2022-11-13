import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1>
              Rent a <span>Place</span> away from <span>Home</span> in the
              <span> Metaverse</span>
            </h1>
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <form>
              <input type="text" placeholder="Search for location" />
              <button>Search</button>
            </form>
          </div>
          <div className={styles.images}>
            <div className={styles.left}>
              <img src="/image 4 (1).png" alt="" />
              <img src="/image 6 (1).png" alt="" />
            </div>
            <div className={styles.right}>
              <img src="/image 3 (1).png" alt="" />
              <img src="/image 5 (1).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
