import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "../src/Routes/Routes";

import styles from "./styles/App.module.css";

const App = () => (
  <div className={styles.app}>
    <Header />
    <div className={styles.bar}>
      <AppRoutes />
    </div>
    <div className={styles.foot}>
      <Footer />
    </div>
  </div>
);

export default App;
