import React from "react";
import styles from "./Landing.module.css";

export function Landing() {
  return (
    <div className={styles.holder}>
      <div className={styles.land}>
        <h1 className={styles.title}>DISCOVER THE WORLD</h1>
        <div className={styles.divi}>
          <button className={styles.button}>
            <a className={styles.link} href="/countries">
              HOME
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;