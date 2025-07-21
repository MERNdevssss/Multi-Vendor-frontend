import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import route definitions
import DispatcherRoutes from './DispatcherRoutes';
import AdminRoutes from './AdminRoutes';

// Import page components
import Login from '../components/pages/LoginPage/LoginPage';
import Register from '../components/pages/RegisterPage/RegisterPage';
import VendorRoutes from './VendorRoutes';
import LandingPage from '../components/pages/LandingPage/LandingPage';
const AppRoutes = () => {
  return (
    <Routes>

    <Route path='/' element={<LandingPage />} />

      {/* Authentication Routes */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
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
