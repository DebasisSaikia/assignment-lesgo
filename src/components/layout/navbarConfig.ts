import { Home, User, BarChart2 } from "lucide-react";

const ROUTE_NAMES = {
  dashboard: "/dashboard",
  profile: "/dashboard/profile",
  analytics: "/dashboard/analytics",
};

const navbarConfig = [
  {
    id: "dashboard",
    pathname: ROUTE_NAMES.dashboard,
    pathTo: ROUTE_NAMES.dashboard,
    navLabel: "Home",
    navIcon: Home,
  },
  {
    id: "profile",
    pathname: ROUTE_NAMES.profile,
    pathTo: ROUTE_NAMES.profile,
    navLabel: "Profile",
    navIcon: User,
  },
  {
    id: "analytics",
    pathname: ROUTE_NAMES.analytics,
    pathTo: ROUTE_NAMES.analytics,
    navLabel: "Analytics",
    navIcon: BarChart2,
  },
];

export { navbarConfig };
