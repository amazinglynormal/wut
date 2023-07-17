import React from "react";
import styles from "./LogoSection.module.css";

export default function LogoSection() {
  return (
    <div className={styles.logoSection}>
      <h2 className={styles.heading}>
        We have not been featured in the following publications:
      </h2>
      <div className={styles.logoContainer}>
        <img
          src="../forbes.svg"
          alt="Forbes Magazine logo"
          className={styles.logo}
        />
        <img
          src="../business-insider.svg"
          alt="Business Insider logo"
          className={styles.logo}
        />
        <img
          src="../fortune.svg"
          alt="Fortune Magazine logo"
          className={styles.logo}
        />
        <img
          src="../economist.svg"
          alt="The Economist logo"
          className={styles.logo}
        />
      </div>
    </div>
  );
}
