// src/components/RelatedProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/RelatedProductCard.module.css';

const RelatedProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productRating}>Rating: {product.rating}</p>
      </div>
    </div>
  );
};

RelatedProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RelatedProductCard;
