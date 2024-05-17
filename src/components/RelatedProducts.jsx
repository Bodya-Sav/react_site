// src/components/RelatedProducts.jsx
import React from "react";
import PropTypes from "prop-types";
import RelatedProductCard from "./RelatedProductCard";
import styles from "../styles/RelatedProducts.module.css";

const RelatedProducts = ({ products, seeMoreLink }) => {
  return (
    <div className={styles.relatedProducts}>
      <div className={styles.productList}>
        {products.slice(0, 5).map((product) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.but}>
        <a href={seeMoreLink} className={styles.seeMoreButton}>
          Просмотреть товары
        </a>
      </div>
    </div>
  );
};

RelatedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  seeMoreLink: PropTypes.string.isRequired,
};

export default RelatedProducts;
