import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import route definitions
import DispatcherRoutes from './DispatcherRoutes';
import AdminRoutes from './AdminRoutes';

// Import page components
import Login from '../components/pages/LoginPage/LoginPage';
import Register from '../components/pages/RegisterPage/RegisterPage';
import VendorRoutes from './VendorRoutes';
import ProductPage from "../components/pages/ProductPage/ProductPage";
import PricingPage from '../components/pages/PricePage/PricePage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/product" element={<ProductPage />} />
      <Route path="/price" element={<PricingPage/>} />
      
      {/* Dispatcher Routes (nested) */}
      {DispatcherRoutes}
      
      {/* Admin Routes */}
      {AdminRoutes}
      
      {/* Landing Route */}
      {VendorRoutes}

    </Routes>
  );
};

export default AppRoutes;
