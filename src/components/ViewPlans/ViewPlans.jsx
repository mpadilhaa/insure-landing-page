import React from "react";
import styles from "./ViewPlans.module.css";
import data from "../../data";
import Button from "../Button/Button";
import bgtwo from "../../assets/bg-pattern-intro-right-mobile.svg";

const ViewPlans = () => {
  const { images, title, paragraph } = data;

  return (
   
      <div className={styles.viewPlans}>
        <img src={images[0]} alt="familia" />
        <div className={styles.content}>
          <h1>{title[0]}</h1>
          <p>{paragraph[0]}</p>
          <span>
            <Button label={"view Plans"} />
          </span>
          <div className={styles.backg}>
            <img src={bgtwo} alt="bg" />
          </div>
        </div>
      </div>
    
  );
};

export default ViewPlans;
