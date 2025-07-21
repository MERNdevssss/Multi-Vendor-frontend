import React from "react";
import { Outlet } from "react-router-dom";

const Estimate = () => {
  return (
    <div className="p-4 md:p-6">
      <Outlet /> 
    </div>
  );
};

export default Estimate;
