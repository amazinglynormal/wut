import React from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <a className={styles.navListItemLink} href="http://">
            Home
          </a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.navListItemLink} href="http://">
            Pricing
          </a>
        </li>
        <li className={styles.navListItem}>
          <a className={styles.navListItemLink} href="http://">
            Dashboard
          </a>
        </li>
      </ul>
    </nav>
  );
}
