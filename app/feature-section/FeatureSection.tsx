import React from "react";
import styles from "./FeatureSection.module.css";

export default function FeatureSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>
          Feature section for whatever you&apos;re shilling
        </h2>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          excepturi deserunt obcaecati, ad sint aperiam laboriosam expedita quam
          minima unde!
        </p>
      </div>
      <dl className={styles.featureGrid}>
        <div className={styles.featureContainer}>
          <dt className={styles.dt}>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.svg}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            Feature One
          </dt>
          <dd className={styles.dd}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum esse
            recusandae earum temporibus mollitia porro facere laborum provident,
            nostrum totam.
          </dd>
        </div>
        <div className={styles.featureContainer}>
          <dt className={styles.dt}>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.svg}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            Feature Two
          </dt>
          <dd className={styles.dd}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum esse
            recusandae earum temporibus mollitia porro facere laborum provident,
            nostrum totam.
          </dd>
        </div>
        <div className={styles.featureContainer}>
          <dt className={styles.dt}>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.svg}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            Feature Three
          </dt>
          <dd className={styles.dd}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum esse
            recusandae earum temporibus mollitia porro facere laborum provident,
            nostrum totam.
          </dd>
        </div>
        <div className={styles.featureContainer}>
          <dt className={styles.dt}>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={styles.svg}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            Feature Four
          </dt>
          <dd className={styles.dd}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum esse
            recusandae earum temporibus mollitia porro facere laborum provident,
            nostrum totam.
          </dd>
        </div>
      </dl>
    </section>
  );
}
