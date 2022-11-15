import React from "react";
import styles from "../styles/cta.module.css";

const CTA = () => {
  return (
    <section id="community" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2>Metabnb NFTs</h2>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button>
              <span>Learn more</span>
            </button>
          </div>
          <div className={styles.image}>
            <img src="/cta_image.png" alt="cta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
