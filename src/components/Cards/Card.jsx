import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="icons card" />
      <h2>{props.subtitle}</h2>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default Card;
