import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import Leftnavigation from "./Components/Leftnavigation";
import Companyicon from "./Components/Companyicon";
import Topnavigation from "./Components/Topnavigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import MeterMaster from "./Components/SubMenu/MeterManagement/MeterMaster";
import MeterAutoRegistration from "./Components/SubMenu/MeterManagement/MeterAutoRegistration";
import ConfigConnDisc from "./Components/SubMenu/MeterManagement/ConfigConnDisc";
import MeterConfig from "./Components/SubMenu/MeterManagement/MeterConfig";
import MeterHealthCheck from "./Components/SubMenu/MeterManagement/MeterHealthCheckup";
import TimeSyncronize from "./Components/SubMenu/MeterManagement/TimeSyncronize";
import NodeStatusMonitoring from "./Components/SubMenu/MeterManagement/NodeStatusMonitoring";
import RemoteFirmwareUpdate from "./Components/SubMenu/MeterManagement/RemoteFirmwareUpdate";


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
            radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
            radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
            #000000
          `,
        }}
      />

      <div className="relative z-10">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white text-3xl"
          >
            <HiMenuAlt3 />
          </button>

          <h1 className="text-white font-semibold text-lg">MDMS</h1>
        </div>

        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-full w-72 bg-black/30 border-r border-gray-800
            transform transition-transform duration-300 z-50
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          <Companyicon />

          <Leftnavigation closeSidebar={() => setSidebarOpen(false)} />
        </div>

        <div
          className="
  lg:ml-72
  min-h-screen
  overflow-y-auto
  "
        >
          <div className="fixed top-0 left-0 lg:left-64 right-0 z-50">
            <Topnavigation />
          </div>

          <div className="pt-20">
            <Routes>
  <Route path="/" element={<Dashboard />} />

  <Route
    path="/meter-management/meter-master"
    element={<MeterMaster />}
  />

  <Route
    path="/meter-management/meter-auto-registration"
    element={<MeterAutoRegistration />}
  />

  <Route
    path="/meter-management/configure-connect-disconnect"
    element={<ConfigConnDisc />}
  />  

  <Route
    path="/meter-management/meter-configuration"
    element={<MeterConfig />}
  />

  <Route
    path="/meter-management/meter-health-check"
    element={<MeterHealthCheck />}
  />

  <Route
    path="/meter-management/time-synchronization"
    element={<TimeSyncronize />}
  />

  <Route
    path="/meter-management/node-status-monitoring"
    element={<NodeStatusMonitoring />}
  />

  <Route
    path="/meter-management/remote-firmware-update"
    element={<RemoteFirmwareUpdate />}
  />

</Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
