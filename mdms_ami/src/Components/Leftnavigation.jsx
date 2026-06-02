import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiDashboard3Line } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { LuScreenShare } from "react-icons/lu";
import { MdOutlineDataThresholding } from "react-icons/md";
import { TbAlertSquare } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { useState } from "react";

const Leftnavigation = ({ closeSidebar }) => {
  
  
      const [active, setActive] = useState("Dashboard");
    const menus = [
  {
    name: "Dashboard",
    icon: <RiDashboard3Line />,
  },
  {
    name: "Meter Management",
    icon: <VscTools />,
    subMenus: ["Meter Master", "Meter Auto Registrat..", "Config Connect/Disco.." , "Meter Configuration" , "Meter Health Check" , "Time Synchronization" , "Node Status Monitoring" , "Remote Firmware Update" , "GIS Mapping of Device"],
  },
  {
    name: "Comm & Networking",
    icon: <LuScreenShare />,
    subMenus: ["Field Device Discovery" , "Secure Communication" , "Retry On Communicati.." , "Communication Health.." , "Device Ping and Trac.." , "Remote Firmware Update"],
  },
  {
    name: "Data Collection & Reports",
    icon: <MdOutlineDataThresholding />,
    subMenus: ["Periodic Data Collec.." , "On-Demand Meter Read" , "Historical Profile D.." , "Raw Data Buffering" , "Data Integrity Valid.." , "HES MDM Integration" , "Command Routing From"],
  },
  {
    name: "Events & Alerts",
    icon: <TbAlertSquare />,
    subMenus:["Alarm Master Configu.." ,"Exception Reporting" , "Critical Event Logging" ,"Non Critical Event R.." , "Alarm Notification E.." , "Priority Event Handl.."]
  },
  {
    name: "Security & Access",
    icon: <MdSecurity />,
    subMenus:["Role-Based Access Co.." , "Audit Trail Logging"]
  },
  {
    name: "System Health & Resilience",
    icon: <TbWorld />,
    subMenus:["Hardware Application.."]
  },
  {
    name: "Configuration",
    icon: <IoSettings />,
    subMenus:["Settings"]
  },
];
const [openMenu, setOpenMenu] = useState(null);
  return (
<div className="w-full lg:w-64 h-full overflow-y-auto scrollbar-hide">
  
  {/* Search */}
  <div className="relative mt-5 px-3">
    <input
      type="text"
      placeholder="Search Menus"
      className="
        w-full
        h-10
        pl-4
        pr-10
        text-white
        bg-transparent
        border border-gray-600
        rounded-xl
        shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-gray-500
      "
    />

    <CiSearch
      className="
        absolute
        right-6
        top-1/2
        -translate-y-1/2
        text-xl
        text-gray-400
      "
    />
  </div>

  {/* Navigation */}
  <ul className="flex flex-col gap-2 mt-6 px-2 ">

   {menus.map((menu) => (
  <li key={menu.name}>
    
    <div
      onClick={() => {
        setActive(menu.name);

        if (menu.subMenus) {
          setOpenMenu(
            openMenu === menu.name ? null : menu.name
          );
        }

        if (window.innerWidth < 1024 && closeSidebar) {
          closeSidebar();
        }
      }}
      className={`
        cursor-pointer
        rounded-xl
        transition-all
        duration-300
        scrollbar-hide
        ${
          active === menu.name
            ? "bg-gray-700 text-white"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }
      `}
    >
      <div className="flex items-center justify-between px-4 py-3">
        
        <div className="flex items-center gap-3">
          <span className="text-xl">
            {menu.icon}
          </span>

          <span className="text-sm font-medium">
            {menu.name}
          </span>
        </div>

        {menu.subMenus && (
          <span
            className={`transition-transform duration-300 ${
              openMenu === menu.name
                ? "rotate-90"
                : ""
            }`}
          >
            ▼
          </span>
        )}
      </div>
    </div>

    {/* Submenus */}
    {openMenu === menu.name &&
      menu.subMenus && (
        <ul className="ml-10 mt-1 flex flex-col gap-1">
          {menu.subMenus.map((subMenu) => (
            <li
              key={subMenu}
              className="
                text-sm
                text-gray-400
                px-3
                py-2
                rounded-lg
                cursor-pointer
                hover:bg-gray-800
                hover:text-white
                transition-all
              "
            >
              {subMenu}
            </li>
          ))}
        </ul>
      )}
  </li>
))}
  </ul>

</div>
  )
}

export default Leftnavigation
