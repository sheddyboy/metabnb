import React, { useContext } from "react";
import styles from "../styles/nav.module.css";
import { Link } from "react-router-dom";
import { ModalCtx } from "../contexts/ModalContex";

const Nav = () => {
  const { toggleModal } = useContext(ModalCtx);

  return (
    <nav className={styles.nav + " container"}>
      <img src="/nav_logo.svg" alt="logo" />
      <div className={styles.nav_links}>
        <Link to="/">Home</Link>
        <Link to="/">Place to stay</Link>
        <Link to="/nfts">NFTs</Link>
        <Link to="/">Community</Link>
      </div>
      <button onClick={toggleModal}>Connect wallet</button>
    </nav>
  );
};

export default Nav;
