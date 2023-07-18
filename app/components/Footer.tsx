import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy;FooBar Industries</p>
      <div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
