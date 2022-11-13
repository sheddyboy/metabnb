import React from "react";
import Card from "../components/Card";
import { nfts } from "../nfts";
import styles from "../styles/overview.module.css";

const Overview = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Inspiration for your next adventure</h2>
        <div className={styles.grid}>
          {nfts.map(
            (i, index) => index < 8 && <Card key={i.id} image={i.image} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Overview;
