import React from "react";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Please give us your money!</h2>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          consequuntur dolorem quam dolore dolores tempora, vitae, voluptas ea
          accusantium suscipit.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={`${styles.button} ${styles.primaryButton}`}
        >
          Another Call-to-Action Button
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          Goes to pricing <span className={styles.buttonSpan}>→</span>
        </button>
      </div>
    </section>
  );
}
