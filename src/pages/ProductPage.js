// ProductPage.jsx

import ProductsList from "../components/ProductsList";

const ProductPage = ({ productsData }) => (
  <ProductsList productsData={productsData} basePath="/products"/>
);

export default ProductPage;
