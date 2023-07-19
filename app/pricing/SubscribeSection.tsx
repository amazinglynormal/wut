"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./SubscribeSection.module.css";

export default function SubscribeSection() {
  const [input, setInput] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInput("");
  }

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInput(value);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Sign up for our newsletter... or else.</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.innerFormContainer}>
          <label htmlFor="email-address" className={styles.label}>
            Email Address
          </label>
          <input
            id="email-address"
            type="email"
            autoComplete="email"
            value={input}
            onChange={onInputChange}
            placeholder="Enter your email"
            className={styles.input}
          />
          <button
            type="submit"
            className={`${styles.button} ${styles.primaryButton}`}
          >
            Subscribe
          </button>
        </div>
        <p className={styles.disclaimer}>We will immediately sell your data.</p>
      </form>
    </section>
  );
}
