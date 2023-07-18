import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link className={styles.navListItemLink} href="/">
            Home
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.navListItemLink} href="/pricing">
            Pricing
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link className={styles.navListItemLink} href="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
