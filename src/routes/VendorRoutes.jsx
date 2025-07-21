import { Route, Navigate } from "react-router-dom";

// Layout
import VendorLayout from "../components/Layout/Landing/VendorLayout";

// Pages
import Dashboard from "../components/Layout/Landing/pages/Dashboard";
import Customers from "../components/Layout/Landing/pages/Customers";
import WorkOrders from "../components/Layout/Landing/pages/WorkOrders";

import TeamMembers from "../components/Layout/Landing/pages/TeamMembers";
import TimeLogs from "../components/Layout/Landing/pages/TimeLogs";
import Payments from "../components/Layout/Landing/pages/Payments";
import Estimate from "../components/Layout/Landing/pages/Estimate/Estimate";
import EstimatesPage from "../components/Layout/Landing/pages/Estimate/Estimates";
import NewEstimatePage from "../components/Layout/Landing/pages/Estimate/NewEstimate";
import Invoice from "../components/Layout/Landing/pages/Invoice/Invoice";
import InvoiceDetailsPage from "../components/Layout/Landing/pages/Invoice/NewInvoice";
import InvoicesPage from "../components/Layout/Landing/pages/Invoice/Invoices";



const VendorRoutes = (
  <Route path="/vendor" element={<VendorLayout />}>
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="customers" element={<Customers />} />
    <Route path="workOrder" element={<WorkOrders />} />
    <Route path="teamMembers" element={<TeamMembers />} />
    <Route path="timeLogs" element={<TimeLogs />} />
    <Route path="payments" element={<Payments />} />
    

    <Route path="estimates" element={<Estimate />}>
      <Route index element={<EstimatesPage />} />
      <Route path="new-estimate" element={<NewEstimatePage />} /> 
    </Route>

    <Route path="invoices" element={<Invoice />}>
      <Route index element={<InvoicesPage />} />
      <Route path="new-invoice" element={<InvoiceDetailsPage />} /> 
    </Route>
  </Route>
);

export default VendorRoutes;
