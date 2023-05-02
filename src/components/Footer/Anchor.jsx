import React from "react";

import styles from "./Anchor.module.css";

const Anchor = (props) => {
  return (
    <div className={styles.anchor}>
      <h6 className={styles.title}>{props.title}</h6>
      {props.paragraph.map((paragraph, i) => (
        <h6 className={styles.paragraph} key={i}>
          {paragraph}
        </h6>
      ))}
    </div>
  );
};

export default Anchor;
