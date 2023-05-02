import React from "react";
import styles from "./ViewPlans.module.css";
import data from "../../data";
import useWidth from "../../hooks/useWidth";

import bgtwo from "../../assets/bg-pattern-intro-right-mobile.svg";
import bgthree from "../../assets/bg-pattern-intro-left-desktop.svg";

const ViewPlans = () => {
  const { images, title, paragraph } = data;
  const { width } = useWidth();
  return (
    <div className={styles.viewPlans}>
      {width > 834 ? (
        <img src={images[0]} alt="familia" />
      ) : (
        <img src={images[1]} alt="familia" />
      )}

      <div className={styles.content}>
        <span></span>
        <h1>{title[0]}</h1>
        <p>{paragraph[0]}</p>

        <button>view plans</button>

        <div className={styles.backg}>
         {width < 834 ? <img src={bgtwo} alt="bg" /> : <img src={bgthree} alt="bg" /> } 
        </div>
      </div>
    </div>
  );
};

export default ViewPlans;
