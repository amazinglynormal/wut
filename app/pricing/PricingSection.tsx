import React from "react";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.heading}>Best value on the market</h1>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnam
          modi accusantium ipsa quaerat eos voluptate nam, voluptates quasi, et
          soluta.
        </p>
      </div>
      <div className={styles.offerContainer}>
        <div className={styles.offerContainerHeader}>
          <h2 className={styles.offerHeading}>Introductory offer</h2>
          <p className={styles.offerSubheading}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            soluta itaque quibusdam dignissimos dolor illum iusto.
          </p>
        </div>
        <div className={styles.offerCTAContainer}>
          <p className={styles.offerCTACopy}>All the cool kids are doing it!</p>
          <p className={styles.offerPrice}>&euro;997&#42;</p>
          <button
            type="button"
            className={`${styles.button} ${styles.primaryButton}`}
          >
            Sign up now
          </button>
          <p className={styles.disclaimer}>
            &#42;No receipts given under any circumstances. Sorry, not sorry.
          </p>
        </div>
      </div>
    </section>
  );
}
