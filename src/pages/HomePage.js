import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/HomePage.module.css";
import SaleBanner from "../components/SaleBanner";
import RelatedProducts from "../components/RelatedProducts";

import { TV, projectors, brackets, satellite } from "../consts/Constants";

const HomePage = () => (
  <>
    <div className={styles.home}>
      <div className={styles.bar}>
        <NavBar />
      </div>
      <div className={styles.banner}>
        <SaleBanner />
      </div>
    </div>
    <div>
      <RelatedProducts
        products={TV}
        seeMoreLink="/products"
      />
      <RelatedProducts
        products={projectors}
        seeMoreLink="/projectors"
      />
      <RelatedProducts
        products={brackets}
        seeMoreLink="/brackets"
      />
      <RelatedProducts
        products={satellite}
        seeMoreLink="/satellite"
      />
    </div>
  </>
);

export default HomePage;
