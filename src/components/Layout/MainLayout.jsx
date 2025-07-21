import React from "react";
import { Outlet } from "react-router-dom";
import NavbarLandingPage from "../pages/LandingPage/Navbar";

const MainLayout = () => {
  return (
    <div>
      <NavbarLandingPage />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
