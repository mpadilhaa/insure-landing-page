import React from "react";
import styles from "./Navbar.module.css";

import data from "../../data";
import useWidth from "../../hooks/useWidth";
import { VscChromeClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";
import useMenu from "../../hooks/useMenu";

const Navbar = () => {
  const { logo, nav } = data;
  const { width } = useWidth();
  const { handleClick, isMobile } = useMenu();

  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} alt="logo" />
      </div>

      {width < 834 ? (
        <div className={styles.mobileIcon}>
          {isMobile ? (
            <button className={styles.menu} onClick={handleClick}>
              <VscChromeClose />
            </button>
          ) : (
            <button className={styles.menu} onClick={handleClick}>
              <VscMenu />
            </button>
          )}
          {isMobile ? (
            <div className={styles.mobile}>
              <nav className={styles.navMobile}>
                <a href="#howwework">{nav[0]}</a>
                <a href="#blog">{nav[1]}</a>
                <a href="#acountt">{nav[2]}</a>
                <button className={styles.btnMobile}>View plans</button>
              </nav>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className={styles.desktop}>
          <nav className={styles.navDesktop}>
            <a href="#howwework">{nav[0]}</a>
            <a href="#blog">{nav[1]}</a>
            <a href="#acountt">{nav[2]}</a>
          </nav>
          <button>View plans</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
