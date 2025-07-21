import React from "react";
import { Route, Navigate } from "react-router-dom";

// Import Dispatcher Layout
import DispatchLayout from "../components/Layout/Dispatcher/DispatchLayout";

// Import Dispatcher Pages
import Dashboard from "../components/Layout/Dispatcher/pages/Dashboard/Dashboard";
import Customers from "../components/Layout/Dispatcher/pages/Customers";
import Jobs from "../components/Layout/Dispatcher/pages/Jobs/Jobs";
import Reports from "../components/Layout/Dispatcher/pages/Estimates";
import Settings from "../components/Layout/Dispatcher/pages/Settings";
import TeamManagement from "../components/Layout/Dispatcher/pages/TeamManagement";
import Notifications from "../components/Layout/Dispatcher/pages/Notification";
import Payments from "../components/Layout/Dispatcher/pages/Payments/Payments";
import Estimates from "../components/Layout/Dispatcher/pages/Estimates";

const DispatcherRoutes = (
  <Route path="/dispatcher" element={<DispatchLayout />}>
    <Route index element={<Navigate to="/dispatcher/dashboard" replace />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="customers" element={<Customers />} />
    <Route path="jobs" element={<Jobs />} />
    <Route path="job/:jobId" element={<Jobs />} />
    <Route path="estimates" element={<Estimates />} />
    <Route path="settings" element={<Settings />} />
    <Route path="team" element={<TeamManagement />} />
    <Route path="payments" element={<Payments />} />
    <Route path="notifications" element={<Notifications />} />
  </Route>
);

export default DispatcherRoutes;
