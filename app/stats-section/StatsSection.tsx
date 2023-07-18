import React from "react";
import styles from "./StatsSection.module.css";

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Results speak for themselves</h2>
        <p className={styles.subheading}>
          Cherry-picked statistics to make us sound as impressive as possible
        </p>
      </div>
      <dl className={styles.statsList}>
        <div className={styles.statContainer}>
          <dt className={styles.dt}>laundered for criminal orgs</dt>
          <dd className={styles.dd}>&euro;250M</dd>
        </div>
        <div className={styles.statContainer}>
          <dt className={styles.dt}>complaints ignored</dt>
          <dd className={styles.dd}>10&#44;000&#43;</dd>
        </div>
        <div className={styles.statContainer}>
          <dt className={styles.dt}>sounds impressive</dt>
          <dd className={styles.dd}>99&#37;</dd>
        </div>
        <div className={styles.statContainer}>
          <dt className={styles.dt}>as fast as pizza</dt>
          <dd className={styles.dd}>&lt; 30 mins</dd>
        </div>
      </dl>
    </section>
  );
}
