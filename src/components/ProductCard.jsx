// //ProductCard.jsx
// import React from "react";
// import styles from "../styles/ProductCard.module.css";

// const ProductCard = ({ product }) => (
//   <div className={styles.product}>
//     <div className={styles.image}>
//       <img src={product.image} alt={product.name} />
//     </div>

//     <div className={styles.info}>
//       <h3>{product.name}</h3>
//       <p>{product.price} USD</p>
//       <p>Rating: {product.rating}</p>
//     </div>
//   </div>
// );

// export default ProductCard;

// //ProductCard.jsx
// import React from "react";
// import PropTypes from "prop-types";
// import styles from "../styles/ProductCard.module.css";

// const ProductCard = ({ product, onClick }) => (
//   <div className={styles.product} onClick={onClick}>
//     <div className={styles.image}>
//       <img src={product.image} alt={product.name} />
//     </div>
//     <div className={styles.info}>
//       <h3>{product.name}</h3>
//       <p>{product.price} USD</p>
//       <p>Rating: {product.rating}</p>
//     </div>
//   </div>
// );

// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default ProductCard;

// //ProductCard.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, onClick }) => (
  <div className={styles.product} onClick={onClick}>
    <div className={styles.image}>
      <img src={product.image} alt={product.name} />
    </div>
    <div className={styles.info}>
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
      <p>Rating: {product.rating}</p>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;