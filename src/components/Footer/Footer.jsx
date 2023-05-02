import React from "react";
import styles from "./Footer.module.css";
import Anchor from "./Anchor";
import data from "../../data";

const Footer = () => {
  const { footer, logo, iconsSocials } = data;
  const ourCompany = footer[0].links;
  const helpMe = footer[1].links;
  const contact = footer[2].links;
  const others = footer[3].links;

  return (
    <div className={styles.footer}>
      <div className={styles.logoAndSocials}>
        <img src={logo} alt="logo insure" />
        <div className={styles.socials}>
          {iconsSocials.map((icons, i) => (
            <img key={i} src={icons} alt="icons" />
          ))}
        </div>
      </div>
      <span></span>
      <div className={styles.anchors}>
        <Anchor title={footer[0].title} paragraph={ourCompany} />
        <Anchor title={footer[1].title} paragraph={helpMe} />
        <Anchor title={footer[2].title} paragraph={contact} />
        <Anchor title={footer[3].title} paragraph={others} />
      </div>
    </div>
  );
};

export default Footer;
