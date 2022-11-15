import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styles from "../styles/nfts.module.css";
import { nfts } from "../nfts";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const PlaceToStay = () => {
  return (
    <>
      <Nav />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.sort}>
              <div className={styles.sortLinks}>
                <Link to="/nfts">Resturant</Link>
                <Link to="/nfts">Cottage</Link>
                <Link to="/nfts">Castle</Link>
                <Link to="/nfts">fantast city</Link>
                <Link to="/nfts">beach</Link>
                <Link to="/nfts">Carbins</Link>
                <Link to="/nfts">Off-grid</Link>
                <Link to="/nfts">Farm</Link>
              </div>
              <div className={styles.location}>
                <p>Location</p>
                <img src="/setting-5.svg" alt="seetings" />
              </div>
            </div>
            <div className={styles.nfts}>
              {nfts.map((i) => (
                <Card key={i.id} image={i.image} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PlaceToStay;
