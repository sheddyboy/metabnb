import React from "react";
import styles from "../styles/sponsors.module.css";

const Sponsors = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <img src="/mbtoken.svg" alt="" />
          <img src="/metamask.svg" alt="" />
          <img src="/opensea.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
