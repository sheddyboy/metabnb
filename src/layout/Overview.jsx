import React from "react";
import Card from "../components/Card";
import styles from "../styles/overview.module.css";

const Overview = () => {
  const nfts = [
    { image: "/nft_1.svg", id: "1" },
    { image: "/nft_2.svg", id: "2" },
    { image: "/nft_3.svg", id: "3" },
    { image: "/nft_4.svg", id: "4" },
    { image: "/nft_5.svg", id: "5" },
    { image: "/nft_6.svg", id: "6" },
    { image: "/nft_7.svg", id: "7" },
    { image: "/nft_8.svg", id: "8" },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <h2>Inspiration for your next adventure</h2>
        <div className={styles.grid}>
          {nfts.map((i) => (
            <Card key={i.id} image={i.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
