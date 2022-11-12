import React from "react";
import styles from "../styles/footer.module.css";

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
                <a href="/">NFT</a>
                <a href="/">Tokens</a>
                <a href="/">Landlords</a>
                <a href="/">Discord</a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <h4>Places</h4>
              <div className={styles.footerLinkWrapper}>
                <a href="/">Castle</a>
                <a href="/">Farms </a>
                <a href="/">Beach</a>
                <a href="/">Learn more</a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <h4>About us</h4>
              <div className={styles.footerLinkWrapper}>
                <a href="/">Road map</a>
                <a href="/">Creators </a>
                <a href="/">Career</a>
                <a href="/">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
