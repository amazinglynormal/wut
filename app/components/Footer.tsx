import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy;FooBar Industries</p>
      <div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <a href="#">Home</a>
            </li>
            <li className={styles.navListItem}>
              <a href="#">Pricing</a>
            </li>
            <li className={styles.navListItem}>
              <a href="#">Dashboard</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
