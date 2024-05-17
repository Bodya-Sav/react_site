import React from "react";
import styles from "../styles/SaleBanner.module.css"; // Подключение стилей

import image from "../images/QLED/file (4).png";

const SaleBanner = () => (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 20%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>Лучшие продажи 2024 года!</div>
          <h1 className={styles.head}>50" (125 см) <br /> LED-ТЕЛЕВИЗОР SAMSUNG</h1>
          <button className={styles.button}>Купить сейчас</button>
        </div>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );

export default SaleBanner;
