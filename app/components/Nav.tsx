import React from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <a className={styles.navListItemLink} href="/">
            Home
          </a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.navListItemLink} href="/">
            Pricing
          </a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.navListItemLink} href="/">
            Dashboard
          </a>
        </li>
      </ul>
    </nav>
  );
}
