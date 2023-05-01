import React from "react";
import styles from "./WorkCard.module.css";
import data from "../../data";
import Button from "../Button/Button";

const WorkCard = () => {
  const { title } = data;

  return (
    <div className={styles.workCard}>
      <h1>{title[2]}</h1>
      <span>
        <Button label={"how he work"} />
      </span>
    </div>
  );
};

export default WorkCard;
