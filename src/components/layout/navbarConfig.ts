import { Home, User, BarChart2 } from "lucide-react";

const navbarConfig = [
  {
    id: "dashboard",
    pathname: "/dashboard",
    pathTo: "/dashboard",
    navLabel: "Home",
    navIcon: Home,
  },
  {
    id: "profile",
    pathname: "/dashboard/profile",
    pathTo: "/dashboard/profile",
    navLabel: "Profile",
    navIcon: User,
  },
  {
    id: "analytics",
    pathname: "/dashboard/analytics",
    pathTo: "/dashboard/analytics",
    navLabel: "Analytics",
    navIcon: BarChart2,
  },
];

export { navbarConfig };
