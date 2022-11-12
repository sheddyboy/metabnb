import React from "react";
import styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav + " container"}>
      <img src="/nav_logo.svg" alt="logo" />
      <div className={styles.nav_links}>
        <a href="/">Home</a>
        <a href="/">Place to stay</a>
        <a href="/">NFTs</a>
        <a href="/">Community</a>
      </div>
      <button>Connect wallet</button>
    </nav>
  );
};

export default Nav;
