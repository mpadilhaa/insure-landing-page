import React from "react";
import styles from "./WorkCard.module.css";
import data from "../../data";

const WorkCard = () => {
  const { title } = data;

  return (
    <div className={styles.workCard}>
      <div className={styles.title}>
        <h1>{title[2]}</h1>
      </div>
      <div>
        <button>how we work</button>
      </div>
    </div>
  );
};

export default WorkCard;
