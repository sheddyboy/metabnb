import React, { useContext, useState } from "react";
import styles from "../styles/nav.module.css";
import { Link } from "react-router-dom";
import { ModalCtx } from "../contexts/ModalContex";

const Nav = () => {
  const [mobilenav, setMobilenav] = useState(false);
  const { toggleModal } = useContext(ModalCtx);

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.wrapper}>
          <img src="/nav_logo.svg" alt="logo" />
          <div className={styles.nav_links}>
            <Link to="/">Home</Link>
            <Link to="/place-to-stay">Place to stay</Link>
            <a href="#nfts">NFTs</a>
            <a href="#community">Community</a>
          </div>
          <button className={styles.btn} onClick={toggleModal}>
            Connect wallet
          </button>
          <div
            className={styles.hamMenu}
            onClick={() => {
              setMobilenav((mobilenav) => !mobilenav);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          {mobilenav && (
            <div className={styles.mobileNav}>
              <div className={styles.mobileNavLinks}>
                <Link to="/">Home</Link>
                <Link to="/place-to-stay">Place to stay</Link>
                <a href="#nfts">NFTs</a>
                <a href="#community">Community</a>
                <button className={styles.mobileBtn} onClick={toggleModal}>
                  Connect wallet
                </button>
              </div>
              <div
                className={styles.overlay}
                onClick={() => {
                  setMobilenav((mobilenav) => !mobilenav);
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
