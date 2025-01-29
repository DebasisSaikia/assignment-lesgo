const getRouteTitle = (pathname: string): string => {
  const routes: { [key: string]: string } = {
    "/dashboard": "Dashboard",
    "/dashboard/profile": "Profile",
    "/dashboard/analytics": "Analytics",
  };
  return routes[pathname] || "Dashboard";
};

export { getRouteTitle };
