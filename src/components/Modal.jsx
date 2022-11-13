import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalCtx } from "../contexts/ModalContex";
import styles from "../styles/modal.module.css";

const Modal = () => {
  const { modal, toggleModal } = useContext(ModalCtx);

  return ReactDOM.createPortal(
    <>
      {modal && (
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.top}>
              <h3>Connect Wallet</h3>
              <img src="/x.svg" alt="close" onClick={toggleModal} />
            </div>
            <div className={styles.bottom}>
              <p>Choose your preferred wallet:</p>
              <div className={styles.card}>
                <div className={styles.left}>
                  <img src="/meta-mask.svg" alt="metamask" />
                  <p>Metamask</p>
                </div>
                <div className={styles.right}>
                  <img src="/Down Chevron.svg" alt="Down Chevron" />
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.left}>
                  <img src="/walletconnect.svg" alt="WalletConnect" />
                  <p>WalletConnect</p>
                </div>
                <div className={styles.right}>
                  <img src="/Down Chevron.svg" alt="Down Chevron" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.overlay} onClick={toggleModal}></div>
        </div>
      )}
    </>,
    document.getElementById("portol")
  );
};

export default Modal;
