import React from "react";
import styles from "./Cards.module.css";
import data from "../../data";
import Card from "./Card";

const Cards = () => {
  const { cardIcons, cardParagraph, subtitle, title } = data;

  return (
    <div className={styles.cards}>
      <span></span>
      <h1>{title[1]}</h1>
      <Card
        img={cardIcons[0]}
        subtitle={subtitle[0]}
        paragraph={cardParagraph[0]}
      />
      <Card
        img={cardIcons[1]}
        subtitle={subtitle[1]}
        paragraph={cardParagraph[1]}
      />
      <Card
        img={cardIcons[2]}
        subtitle={subtitle[2]}
        paragraph={cardParagraph[2]}
      />
    </div>
  );
};

export default Cards;
