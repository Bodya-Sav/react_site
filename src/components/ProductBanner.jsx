//ProductBanner.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ProductBanner.module.css"; // Подключение стилей
import StarRating from "./starrating/StarRating";

const ProductBanner = ({ product }) => (
  <section className={styles.productBanner}>
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.text}>
        <h1 className={styles.head}>
          {product.name} <br /> ${product.price}
        </h1>
        <p className={styles.rating}><div className={styles.rating}> <StarRating /></div></p>
        <button className={styles.button}>Купить сейчас</button>
      </div>
    </div>
  </section>
);

ProductBanner.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductBanner;
