import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./routes"

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductPage";
import ProjectorsPage from "../pages/ProjectorsPage";
import BracketsPage from "../pages/BracketsPage";
import SatellitePage from "../pages/SatellitePage";

import { TV, projectors, brackets, satellite } from "../consts/Constants";

const AppRoutes = () => (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.PRODUCTS} element={<ProductsPage productsData={TV} />} />
      <Route path={ROUTES.PROJECTORS} element={<ProjectorsPage productsData={projectors} />} />
      <Route path={ROUTES.BRACKETS} element={<BracketsPage productsData={brackets} />} />
      <Route path={ROUTES.SATELLITE} element={<SatellitePage productsData={satellite} />} />

      {/* Добавим маршрут для страницы продукта с определенным идентификатором */}
      <Route path={`${ROUTES.PRODUCTS}/:productId`} element={<ProductsPage productsData={TV} />} />
      <Route path={`${ROUTES.PROJECTORS}/:productId`} element={<ProjectorsPage productsData={projectors} />} />
      <Route path={`${ROUTES.BRACKETS}/:productId`} element={<BracketsPage productsData={brackets} />} />
      <Route path={`${ROUTES.SATELLITE}/:productId`} element={<SatellitePage productsData={satellite} />} />
    </Routes>
);

export default AppRoutes;
