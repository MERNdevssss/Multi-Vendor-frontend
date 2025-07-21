import { Route, Navigate } from "react-router-dom";
import AdminLayout from "../components/Layout/Admin/AdminLayout";

// Admin pages
import Dashboard from "../components/Layout/Admin/pages/Dashboard";
import Orders from "../components/Layout/Admin/pages/Orders";
import Vendors from "../components/Layout/Admin/pages/Vendors";
import Customers from "../components/Layout/Admin/pages/Customers";
import Settings from "../components/Layout/Admin/pages/Settings";
import Notifications from "../components/Layout/Admin/pages/Notifications";
import Profile from "../components/Layout/Admin/pages/Profile";

// Reports (✅ These are imported here, not in Report.jsx)
import Report from "../components/Layout/Admin/pages/Report/Reports"; // ⬅️ Contains <Outlet />
import ReportsDashboard from "../components/Layout/Admin/pages/Report/ReportDashboard";
import ReportsExportPage from "../components/Layout/Admin/pages/Report/Export&Schedule";

const AdminRoutes = (
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="orders" element={<Orders />} />
    <Route path="vendors" element={<Vendors />} />
    <Route path="customers" element={<Customers />} />
    <Route path="settings" element={<Settings />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="profile" element={<Profile />} />

    {/* ✅ Reports nested routing */}
    <Route path="reports" element={<Report />}>
      <Route index element={<ReportsDashboard />} />
      <Route path="exports" element={<ReportsExportPage />} /> 
    </Route>
  </Route>
);

export default AdminRoutes;
