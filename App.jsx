import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import AdminPanel from "./pages/AdminPanel";
import SalesReports from "./pages/SalesReports";
import InventoryAlerts from "./pages/InventoryAlerts";
import PaymentMethods from "./pages/PaymentMethods";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="bg-gray-900 text-white min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/sales-reports" element={<SalesReports />} />
            <Route path="/inventory-alerts" element={<InventoryAlerts />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;