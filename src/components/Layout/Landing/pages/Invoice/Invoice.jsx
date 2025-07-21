import React from "react";
import { Outlet } from "react-router-dom";

const Invoice = () => {
  return (
    <div className="p-4 md:p-6">
      <Outlet /> 
    </div>
  );
};

export default Invoice;
