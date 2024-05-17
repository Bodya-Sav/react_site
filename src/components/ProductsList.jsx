// //  // ProductsList.js
// import React, { useState } from "react";
// import NavBar from "../components/NavBar";
// import ProductCard from "../components/ProductCard";
// import FilterSort from "../components/FilterSort";
// import ProductBanner from "../components/ProductBanner";
// import styles from "../styles/ProductPage.module.css";

// import { useParams } from "react-router-dom";
// import { TV, projectors, brackets, satellite } from "../consts/Constants";

// const ProductsList = ({ productsData }) => {
//   const [filteredProducts, setFilteredProducts] = useState(productsData);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { productId } = useParams(); // Получение идентификатора продукта из URL

//   const filterProducts = (value) => {
//     if (value === 0) return productsData;
//     return productsData.filter(
//       (p) => p.rating >= value && p.rating < value + 1
//     );
//   };

//   const sortProducts = (products, criteria) => {
//     if (criteria === "price-asc") {
//       return [...products].sort((a, b) => a.price - b.price);
//     } else if (criteria === "price-desc") {
//       return [...products].sort((a, b) => b.price - a.price);
//     }
//     return [...products].sort((a, b) => a[criteria] - b[criteria]);
//   };

//   const handleFilterChange = (e) => {
//     const value = parseFloat(e.target.value);
//     setFilteredProducts(filterProducts(value));
//   };

//   const handleSortChange = (e) => {
//     const value = e.target.value;
//     setFilteredProducts(sortProducts(filteredProducts, value));
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div className={styles.productsPage}>
//       <div className={styles.top}>
//         <NavBar />
//         <div className={styles.banner}>
//           {selectedProduct && <ProductBanner product={selectedProduct} />}
//         </div>
//       </div>

//       <main>
//         <div className={styles.list}>
//           <div className={styles.sort}>
//             <FilterSort
//               onFilterChange={handleFilterChange}
//               onSortChange={handleSortChange}
//             />
//           </div>
//           <div className={styles.cards}>
//             {filteredProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 onClick={() => handleProductClick(product)}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProductsList;

// ProductsList.js
// import React, { useState, useEffect } from "react";
// import NavBar from "../components/NavBar";
// import ProductCard from "../components/ProductCard";
// import FilterSort from "../components/FilterSort";
// import ProductBanner from "../components/ProductBanner";
// import styles from "../styles/ProductPage.module.css";
// import { useParams } from "react-router-dom";
// import { TV, projectors, brackets, satellite } from "../consts/Constants";

// const ProductsList = ({ productsData }) => {
//   const [filteredProducts, setFilteredProducts] = useState(productsData);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { productId } = useParams(); // Получение идентификатора продукта из URL

//   useEffect(() => {
//     // Поиск продукта по идентификатору в списке всех продуктов
//     const allProducts = [...TV, ...projectors, ...brackets, ...satellite];
//     const product = allProducts.find((product) => product.id === parseInt(productId));
//     // Установка выбранного продукта, если он найден
//     if (product) {
//       setSelectedProduct(product);
//     }
//   }, [productId]);

//   const filterProducts = (value) => {
//     if (value === 0) return productsData;
//     return productsData.filter(
//       (p) => p.rating >= value && p.rating < value + 1
//     );
//   };

//   const sortProducts = (products, criteria) => {
//     if (criteria === "price-asc") {
//       return [...products].sort((a, b) => a.price - b.price);
//     } else if (criteria === "price-desc") {
//       return [...products].sort((a, b) => b.price - a.price);
//     }
//     return [...products].sort((a, b) => a[criteria] - b[criteria]);
//   };

//   const handleFilterChange = (e) => {
//     const value = parseFloat(e.target.value);
//     setFilteredProducts(filterProducts(value));
//   };

//   const handleSortChange = (e) => {
//     const value = e.target.value;
//     setFilteredProducts(sortProducts(filteredProducts, value));
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div className={styles.productsPage}>
//       <div className={styles.top}>
//         <NavBar />
//         <div className={styles.banner}>
//           {selectedProduct && <ProductBanner product={selectedProduct} />}
//         </div>
//       </div>

//       <main>
//         <div className={styles.list}>
//           <div className={styles.sort}>
//             <FilterSort
//               onFilterChange={handleFilterChange}
//               onSortChange={handleSortChange}
//             />
//           </div>
//           <div className={styles.cards}>
//             {filteredProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 onClick={() => handleProductClick(product)}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );

// };

//export default ProductsList;

// // ProductsList.jsx
// import React, { useState, useEffect } from "react";
// import NavBar from "../components/NavBar";
// import ProductCard from "../components/ProductCard";
// import FilterSort from "../components/FilterSort";
// import ProductBanner from "../components/ProductBanner";
// import styles from "../styles/ProductPage.module.css";
// import { useParams } from "react-router-dom";
// import { TV, projectors, brackets, satellite } from "../consts/Constants";

// const ProductsList = ({ productsData }) => {
//   const [filteredProducts, setFilteredProducts] = useState(productsData);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { id: productId } = useParams(); // Получение идентификатора продукта из URL

//   useEffect(() => {
//     // Поиск продукта по идентификатору в списке всех продуктов
//     const allProducts = [...TV, ...projectors, ...brackets, ...satellite];
//     const product = allProducts.find((product) => product.id === parseInt(productId));
//     // Установка выбранного продукта, если он найден
//     if (product) {
//       setSelectedProduct(product);
//       setFilteredProducts(productsData); // Обновляем список продуктов для отображения
//     }
//   }, [productId, productsData]);

//   const filterProducts = (value) => {
//     if (value === 0) return productsData;
//     return productsData.filter(
//       (p) => p.rating >= value && p.rating < value + 1
//     );
//   };

//   const sortProducts = (products, criteria) => {
//     if (criteria === "price-asc") {
//       return [...products].sort((a, b) => a.price - b.price);
//     } else if (criteria === "price-desc") {
//       return [...products].sort((a, b) => b.price - a.price);
//     }
//     return [...products].sort((a, b) => a[criteria] - b[criteria]);
//   };

//   const handleFilterChange = (e) => {
//     const value = parseFloat(e.target.value);
//     setFilteredProducts(filterProducts(value));
//   };

//   const handleSortChange = (e) => {
//     const value = e.target.value;
//     setFilteredProducts(sortProducts(filteredProducts, value));
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div className={styles.productsPage}>
//       <div className={styles.top}>
//         <NavBar />
//         <div className={styles.banner}>
//           {selectedProduct && <ProductBanner product={selectedProduct} />}
//         </div>
//       </div>

//       <main>
//         <div className={styles.list}>
//           <div className={styles.sort}>
//             <FilterSort
//               onFilterChange={handleFilterChange}
//               onSortChange={handleSortChange}
//             />
//           </div>
//           <div className={styles.cards}>
//             {filteredProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 onClick={() => handleProductClick(product)}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProductsList;

// ProductsList.js
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import FilterSort from "../components/FilterSort";
import ProductBanner from "../components/ProductBanner";
import styles from "../styles/ProductPage.module.css";
import { useParams } from "react-router-dom";
import { TV, projectors, brackets, satellite } from "../consts/Constants";

const ProductsList = ({ productsData }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { productId } = useParams(); // Получение идентификатора продукта из URL

  useEffect(() => {
    // Поиск продукта по идентификатору в списке всех продуктов
    const allProducts = [...TV, ...projectors, ...brackets, ...satellite];
    const product = allProducts.find((product) => product.id === parseInt(productId));
    // Установка выбранного продукта, если он найден
    if (product) {
      setSelectedProduct(product);
    }
  }, [productId]);

  const filterProducts = (value) => {
    if (value === 0) return productsData;
    return productsData.filter(
      (p) => p.rating >= value && p.rating < value + 1
    );
  };

  const sortProducts = (products, criteria) => {
    if (criteria === "price-asc") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (criteria === "price-desc") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return [...products].sort((a, b) => a[criteria] - b[criteria]);
  };

  const handleFilterChange = (e) => {
    const value = parseFloat(e.target.value);
    setFilteredProducts(filterProducts(value));
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setFilteredProducts(sortProducts(filteredProducts, value));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className={styles.productsPage}>
      <div className={styles.top}>
        <NavBar />
        <div className={styles.banner}>
          {selectedProduct && <ProductBanner product={selectedProduct} />}
        </div>
      </div>

      <main>
        <div className={styles.list}>
          <div className={styles.sort}>
            <FilterSort
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
            />
          </div>
          <div className={styles.cards}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );

};

export default ProductsList;