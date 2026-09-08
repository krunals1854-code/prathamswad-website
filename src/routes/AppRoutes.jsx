import { Routes, Route } from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/ProductPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route
        path="/products/:slug"
        element={<ProductPage />}
      />
    </Routes>
  );
}

export default AppRoutes;