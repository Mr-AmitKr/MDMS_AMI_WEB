/* eslint-disable no-unused-vars */

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
import { Link  , useLocation} from "react-router-dom";

const Leftnavigation = ({ closeSidebar }) => {
  
  const location = useLocation();
      const [active, setActive] = useState("Dashboard");
    const menus = [
  {
  name: "Dashboard",
  icon: <RiDashboard3Line />, 
  path:"/Dashboard/Dashboard"
},
  {
    name: "Meter Management",
    icon: <VscTools />,
    subMenus: [{"name": "Meter Master"
    , "path": "/meter-management/meter-master"
    }
      ,{ "name": "Meter Registration Details",
      "path": "/meter-management/meter-registration-details" }
      ,
      {"name": "Config Connect/Disc..",
     "path": "/meter-management/configure-connect-disconnect" },

      {"name": "Meter Configuration",
       "path": "/meter-management/meter-configuration" },

      {"name": "Meter Health Check", 
      "path": "/meter-management/meter-health-check" },

      {"name": "Meter Groups",
       "path": "/meter-management/Meter_Groups" },

      {"name": "Remote Firmware Update", 
       "path": "/meter-management/remote-firmware-update" },

      {"name": "GIS Mapping of Device", "path": "/meter-management/gis-mapping-of-device" }
    ],
  },
  {
    name: "Comm & Networking",
    icon: <LuScreenShare />,
    subMenus: [{"name": "Field Device Discovery", "path": "/comm-networking/field-device-discovery" },
      {"name": "Secure Communication", "path": "/comm-networking/secure-communication" },
      {"name": "Retry On Communication Failure", "path": "/comm-networking/retry-on-communication-failure" },
      {"name": "Communication Health Monitoring", "path": "/comm-networking/communication-health-monitoring" },
      {"name": "Device Ping and Tracing", "path": "/comm-networking/device-ping-and-tracing" },
      {"name": "Remote Firmware Update", "path": "/comm-networking/remote-firmware-update" }
    ],
  },
  {
    name: "Data Collection & Reports",
    icon: <MdOutlineDataThresholding />,
    subMenus: [{"name": "Periodic Data Collection", "path": "/data-collection-reports/periodic-data-collection" },
      {"name": "On-Demand Meter Read", "path": "/data-collection-reports/on-demand-meter-read" },
      {"name": "Historical Profile Data", "path": "/data-collection-reports/historical-profile-data" },
      {"name": "Raw Data Buffering", "path": "/data-collection-reports/raw-data-buffering" },
      {"name": "Data Integrity Validation", "path": "/data-collection-reports/data-integrity-validation" },
      {"name": "HES MDM Integration", "path": "/data-collection-reports/hes-mdm-integration" },
      {"name": "Command Routing From", "path": "/data-collection-reports/command-routing-from" }
    ],
  },
  {
    name: "Events & Alerts",
    icon: <TbAlertSquare />,
    subMenus: [{"name": "Alarm Master Configuration", "path": "/events-alerts/alarm-master-configuration" },
      {"name": "Exception Reporting", "path": "/events-alerts/exception-reporting" },
      {"name": "Critical Event Logging", "path": "/events-alerts/critical-event-logging" },
      {"name": "Non Critical Event Reporting", "path": "/events-alerts/non-critical-event-reporting" },
      {"name": "Alarm Notification Events", "path": "/events-alerts/alarm-notification-events" },
      {"name": "Priority Event Handling", "path": "/events-alerts/priority-event-handling" }
    ]
  },
  {
    name: "Security & Access",
    icon: <MdSecurity />,
    subMenus: [{"name": "Role-Based Access Control", "path": "/security-access/role-based-access-control" },
      {"name": "Audit Trail Logging", "path": "/security-access/audit-trail-logging" }
    ]
  },
  {
    name: "System Health & Resilience",
    icon: <TbWorld />,
    subMenus: [{"name": "Hardware Application Monitoring", "path": "/system-health-resilience/hardware-application-monitoring" }]
  },
  {
    name: "Configuration",
    icon: <IoSettings />,
    subMenus: [{"name": "Settings", "path": "/configuration/settings" }]
  },
];
const [openMenu, setOpenMenu] = useState(null);
  return ( <div className="w-full lg:w-64 h-full overflow-y-auto scrollbar-hide">

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
            border border-emerald-900
            rounded-xl
            shadow-lg
            focus:outline-none
            focus:ring-2
            focus:ring-emerald-900 
            focus:shadow-emerald-300 focus:shadow-[0_0_10px]
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
      <ul className="flex flex-col gap-2 mt-6 px-2">

        {menus.map((menu) => {
  const isMenuActive =
    menu.subMenus?.some(
      (subMenu) => location.pathname === subMenu.path
    ) || location.pathname === menu.path;

  return (
    <li key={menu.name}>

            {/* Direct Route Menu */}
            {menu.path ? (
             <Link
  to={menu.path}
  onClick={() => {
    if (window.innerWidth < 1024 && closeSidebar) {
      closeSidebar();
    }
  }}
className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
  location.pathname === menu.path
    ? "bg-emerald-600 text-white"
    : "text-gray-400 hover:bg-emerald-900 hover:text-white"
}`}>
  <span className="text-xl">{menu.icon}</span>
  <span className="text-sm font-medium">
    {menu.name}
  </span>
</Link>
            ) : (

              <>
                <div
                  onClick={() =>
                    setOpenMenu(
                      openMenu === menu.name
                        ? null
                        : menu.name
                    )
                  }
                 className={`
  cursor-pointer
  rounded-xl
  transition-all
  ${
    isMenuActive
      ? "bg-emerald-900 text-white"
      : "text-gray-400 hover:bg-emerald-600 hover:text-white"
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

                    <span
                      className={`transition-transform duration-300 ${
                        openMenu === menu.name
                          ? "rotate-90"
                          : ""
                      }`}
                    >
                      ▶
                    </span>

                  </div>
                </div>

                {/* Submenus */}
                {(openMenu === menu.name || isMenuActive) &&  (
                  <ul className="ml-10 mt-1 flex flex-col gap-1">

                    {menu.subMenus.map((subMenu) => (
                      <li key={subMenu.path}>
                       <Link
  to={subMenu.path}
  onClick={() => {
    if (window.innerWidth < 1024 && closeSidebar) {
      closeSidebar();
    }
  }}
  className="block px-3 py-2 rounded-lg text-sm transition-all text-gray-400 hover:bg-emerald-900 hover:text-white"
>
  {subMenu.name}
</Link>
                      </li>
                    ))}

                  </ul>
                )}
              </>
            )}
          </li>
        );      })}

      </ul>
    </div>
  );
};

export default Leftnavigation;