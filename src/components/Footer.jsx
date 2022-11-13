import React from "react";
import styles from "../styles/footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src="/footer_logo.svg" alt="footer logo" />
            </div>
            <div className={styles.socials}>
              <img src="/facebook-263-721950.svg" alt="facebook" />
              <img src="/instagram-216-721958.svg" alt="instagram" />
              <img src="/twitter-241-721979.svg" alt="twitter" />
            </div>
            <div className={styles.copyright}>
              <img src="/ri_copyright-line.svg" alt="copyright" />
              <p>2022 Metabnb</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.footerLinks}>
              <h4>Community</h4>
              <div className={styles.footerLinkWrapper}>
                <Link to="/nfts">NFT</Link>
                <Link to="/">Tokens</Link>
                <Link to="/">Landlords</Link>
                <Link to="/">Discord</Link>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <h4>Places</h4>
              <div className={styles.footerLinkWrapper}>
                <Link to="/">Castle</Link>
                <Link to="/">Farms </Link>
                <Link to="/">Beach</Link>
                <Link to="/">Learn more</Link>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <h4>About us</h4>
              <div className={styles.footerLinkWrapper}>
                <Link to="/">Road map</Link>
                <Link to="/">Creators </Link>
                <Link to="/">Career</Link>
                <Link to="/">Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
