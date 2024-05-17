import React from "react";

import styles from "../styles/FilterSort.module.css";

const FilterSort = ({ onFilterChange, onSortChange }) => (
  <div className={styles.filter}>
    <select onChange={onFilterChange}>
      <option value="0">Все</option>
      <option value="5">5 звезд</option>
      <option value="4">4 звезды</option>
      <option value="3">3 звезды</option>
      <option value="2">2 звезды</option>
      <option value="1">1 звезда</option>
    </select>
    <select onChange={onSortChange}>
      <option value="rating">Сортировать по Рейтингу</option>
      <option value="price-asc">Сначала недорогие</option>
      <option value="price-desc">Сначала дорогие</option>
    </select>
  </div>
);

export default FilterSort;
