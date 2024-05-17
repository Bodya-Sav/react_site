import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <section>
      <div className={styles.navbar}>
        <div className={styles.title}>Категории</div>
        <NavLink
            to="/products"
            activeClassName={styles.active}
            className={
              location.pathname === "/products"
                ? styles.selected
                : styles.active
            }
          >
            Телевизоры
          </NavLink>
          <NavLink
            to="/projectors"
            activeClassName={styles.active}
            className={
              location.pathname === "/projectors"
                ? styles.selected
                : styles.active
            }
          >
            Проекторы и экраны
          </NavLink>
          <NavLink
            to="/brackets"
            activeClassName={styles.active}
            className={
              location.pathname === "/brackets"
                ? styles.selected
                : styles.active
            }
          >
            Кронштейны
          </NavLink>
          <NavLink
            to="/satellite"
            activeClassName={styles.active}
            className={
              location.pathname === "/satellite"
                ? styles.selected
                : styles.active
            }
          >
            Приём ТВ-сигнала
          </NavLink>
      </div>
    </section>
  );
};

export default NavBar;


