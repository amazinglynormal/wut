import React from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>This is a hero section</h1>
      <p className={styles.subText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        dignissimos delectus ex, sapiente quos doloribus tempora, culpa aliquid
        ea placeat fugit voluptatem pariatur praesentium neque?
      </p>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={`${styles.button} ${styles.primaryButton}`}
        >
          Call-to-Action Button
        </button>
        <Link
          href="/pricing"
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          Goes to pricing <span className={styles.buttonSpan}>→</span>
        </Link>
      </div>
    </section>
  );
}
