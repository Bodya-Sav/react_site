import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Footer.module.css";
import LOGO from "../images/logo2.png";

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to="/">
        <img src={LOGO} alt="logo" />
      </Link>
    </div>

    <div className={styles.rights}>
      Developed by {" "}
      <a href="https://t.me/Bodya_Sav" target="_blank" rel="noreferrer">
         SavBodya
      </a> {" "}  © 2024
    </div>

  </section>
);

export default Footer;
