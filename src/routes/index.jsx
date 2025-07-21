import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import route definitions
import DispatcherRoutes from './DispatcherRoutes';
import AdminRoutes from './AdminRoutes';
import VendorRoutes from './VendorRoutes';

// Import page components
import Login from '../components/pages/LoginPage/LoginPage';
import Register from '../components/pages/RegisterPage/RegisterPage';
import LandingPage from '../components/pages/LandingPage/LandingPage';
import ProductPage from "../components/pages/ProductPage/ProductPage";
import PricingPage from '../components/pages/PricePage/PricePage';

// Import Layout
import MainLayout from '../components/Layout/MainLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes with shared navbar */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Dispatcher Routes (nested) */}
      {DispatcherRoutes}
      
      {/* Admin Routes */}
      {AdminRoutes}
      
      {/* Vendor Routes */}
      {VendorRoutes}
    </Routes>
  );
};

export default AppRoutes;
