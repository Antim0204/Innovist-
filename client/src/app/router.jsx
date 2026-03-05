import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../shared/components/Layout";

import ProductListPage from "../features/products/pages/ProductListPage";
import ProductDetailPage from "../features/products/pages/ProductDetailPage";
import CartPage from "../features/cart/pages/CartPage";
import CheckoutPage from "../features/cart/pages/CheckoutPage";
import About from "../features/about/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;