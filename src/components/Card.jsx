import React from "react";
import styles from "../styles/card.module.css";

const Card = ({ image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <div className={styles.content}>
        <div>
          <p>Desert king</p>
          <span>1MBT per night</span>
        </div>
        <div>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div>
          <img src="/ratings.svg" alt="stars" />
        </div>
      </div>
    </div>
  );
};

export default Card;
