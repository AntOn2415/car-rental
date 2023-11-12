import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import Spinner from "../components/Spinner";
import Layout from "components/Layout";
import NotFoundPage from "components/NotFoundPage";
import { Suspense } from "react";
import { CityProvider } from "hooks/CityProvider";

const CatalogPage = lazy(() => import("pages/CatalogPage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage"));
const HomePage = lazy(() => import("pages/HomePage"));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <CityProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CityProvider>
    </Suspense>
  );
};

export default App;
