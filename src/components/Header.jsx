// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "../styles/Header.module.css";
// import LOGO from "../images/logo2.png";
// import { TV, projectors, brackets, satellite } from "../consts/Constants";

// const Header = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     if (!searchValue) {
//       setFilteredProducts([]);
//       return;
//     }

//     const allProducts = [...TV, ...projectors, ...brackets, ...satellite];
//     const filtered = allProducts.filter(product =>
//       product.name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchValue]);

//   const handleSearch = ({ target: { value } }) => {
//     setSearchValue(value);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Link to="/">
//           <img src={LOGO} alt="logo" />
//         </Link>
//       </div>

//       <form className={styles.form}>
//         <div className={styles.icon}>
//           <svg className="icon">
//             <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
//           </svg>
//         </div>
//         <div className={styles.input}>
//           <input
//             type="search"
//             name="search"
//             placeholder="Search for anything..."
//             autoComplete="off"
//             onChange={handleSearch}
//             value={searchValue}
//           />
//         </div>

//         {searchValue && (
//           <div className={styles.box}>
//             {!filteredProducts.length
//               ? "No results"
//               : filteredProducts.map(({ id, name, image, price }) => (
//                   <Link
//                     key={id}
//                     onClick={() => setSearchValue("")}
//                     className={styles.item}
//                     to={`/products/${id}`}
//                   >
//                     <img src={image} alt={name} className={styles.image} />
//                     <div className={styles.title}>{name}</div>
//                     <div className={styles.price}>${price}</div>
//                   </Link>
//                 ))}
//           </div>
//         )}
//       </form>
//     </header>
//   );
// };

// export default Header;

// Header.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "../styles/Header.module.css";
// import LOGO from "../images/logo2.png";
// import { TV, projectors, brackets, satellite } from "../consts/Constants";

// const Header = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     if (!searchValue) {
//       setFilteredProducts([]);
//       return;
//     }

//     const allProducts = [...TV, ...projectors, ...brackets, ...satellite];
//     const filtered = allProducts.filter(product =>
//       product.name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchValue]);

//   const handleSearch = ({ target: { value } }) => {
//     setSearchValue(value);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Link to="/">
//           <img src={LOGO} alt="logo" />
//         </Link>
//       </div>

//       <form className={styles.form}>
//         <div className={styles.icon}>
//           <svg className="icon">
//             <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
//           </svg>
//         </div>
//         <div className={styles.input}>
//           <input
//             type="search"
//             name="search"
//             placeholder="Search for anything..."
//             autoComplete="off"
//             onChange={handleSearch}
//             value={searchValue}
//           />
//         </div>

//         {searchValue && (
//           <div className={styles.box}>
//             {!filteredProducts.length
//               ? "No results"
//               : filteredProducts.map(({ id, name, image, price }) => (
//                   <Link
//                     key={id}
//                     className={styles.item}
//                     to={`/products/${id}`} // Переход на страницу с продуктами с использованием идентификатора продукта в URL
//                   >
//                     <img src={image} alt={name} className={styles.image} />
//                     <div className={styles.title}>{name}</div>
//                     <div className={styles.price}>${price}</div>
//                   </Link>
//                 ))}
//           </div>
//         )}
//       </form>
//     </header>
//   );
// };

// export default Header;

// Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import LOGO from "../images/logo2.png";
import { TV, projectors, brackets, satellite } from "../consts/Constants";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!searchValue) {
      setFilteredProducts([]);
      return;
    }

    const allProducts = [...TV, ...projectors, ...brackets, ...satellite];
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchValue]);

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const getCategoryPath = (product) => {
    if (TV.includes(product)) return "products";
    if (projectors.includes(product)) return "projectors";
    if (brackets.includes(product)) return "brackets";
    if (satellite.includes(product)) return "satellite";
    return "products";
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <form className={styles.form}>
        <div className={styles.icon}>
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
          </svg>
        </div>
        <div className={styles.input}>
          <input
            type="search"
            name="search"
            placeholder="Search for anything..."
            autoComplete="off"
            onChange={handleSearch}
            value={searchValue}
          />
        </div>

        {searchValue && (
          <div className={styles.box}>
            {!filteredProducts.length
              ? "No results"
              : filteredProducts.map((product) => {
                  const categoryPath = getCategoryPath(product);
                  return (
                    <Link
                      key={product.id}
                      className={styles.item}
                      to={`/${categoryPath}/${product.id}`} // Формируем путь на основе категории
                    >
                      <img src={product.image} alt={product.name} className={styles.image} />
                      <div className={styles.title}>{product.name}</div>
                      <div className={styles.price}>${product.price}</div>
                    </Link>
                  );
                })}
          </div>
        )}
      </form>
    </header>
  );
};

export default Header;