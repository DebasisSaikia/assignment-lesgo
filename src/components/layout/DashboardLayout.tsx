import React, { useState } from "react";
import { Outlet, Navigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import {
  Menu,
  Home,
  User,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { getRouteTitle } from "../../utils/routeName";

const GlobalWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
`;

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const Sidebar = styled.aside<{ $isOpen: boolean }>`
  width: ${(props) => (props.$isOpen ? "240px" : "70px")};
  background: #1a1a1a;
  color: white;
  transition: width 0.3s ease;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

const SidebarContent = styled.div`
  padding: 1rem;
`;

const Header = styled.header`
  background: white;
  padding-right: 2rem;
  padding-left: 2rem;
  //   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  h1 {
    font-size: 25px;
    color: rgb(87, 85, 85);
  }
`;

const Content = styled.div`
  padding: 2rem;
`;

const NavLink = styled(Link)<{ $active?: boolean; $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  color: ${(props) => (props.$active ? "#fff" : "#999")};
  text-decoration: none;
  border-radius: 6px;
  background: ${(props) => (props.$active ? "#333" : "transparent")};
  margin-bottom: 8px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: #333;
    color: white;
  }

  span {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    white-space: nowrap;
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background: #333;
  }
`;

const MainContent = styled.main<{ $isSidebarOpen: boolean }>`
  flex: 1;
  background: #f5f5f5;
  margin-left: ${(props) => (props.$isSidebarOpen ? "240px" : "70px")};
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 100vh;
`;

const SidebarHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #333;
  margin-bottom: 1rem;

  h2 {
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    transform: translateX(${(props) => (props.$isOpen ? "0" : "-20px")});
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
  }
`;

const LogoutButton = styled.button<{ $isOpen: boolean }>`
  background: transparent;
  border: none;
  color: #ef4444;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  width: 100%;
  border-radius: 6px;
  margin-top: auto;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #333;
  }

  span {
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    transform: translateX(${(props) => (props.$isOpen ? "0" : "-20px")});
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
  }

  svg {
    min-width: 20px;
    transform: translateX(${(props) => (props.$isOpen ? "0" : "24px")});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const DashboardLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const { isAuthenticated, isLoading, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isLoading) {
    return null; // or a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GlobalWrapper>
      <LayoutContainer>
        <Sidebar $isOpen={isOpen}>
          <SidebarContent>
            <SidebarHeader $isOpen={isOpen}>
              {isOpen && <h2>Dashboard</h2>}
              <ToggleButton onClick={toggleSidebar}>
                {isOpen ? (
                  <ChevronLeft size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </ToggleButton>
            </SidebarHeader>

            <NavLink
              to="/dashboard"
              $active={location.pathname === "/dashboard"}
              $isOpen={isOpen}
            >
              <Home size={20} />
              {isOpen && <span>Home</span>}
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              $active={location.pathname === "/dashboard/profile"}
              $isOpen={isOpen}
            >
              <User size={20} />
              {isOpen && <span>Profile</span>}
            </NavLink>

            <NavLink
              to="/dashboard/analytics"
              $active={location.pathname === "/dashboard/analytics"}
              $isOpen={isOpen}
            >
              <BarChart2 size={20} />
              {isOpen && <span>Analytics</span>}
            </NavLink>

            {isOpen && (
              <LogoutButton $isOpen={isOpen} onClick={logout}>
                <LogOut size={20} />
                <span>Logout</span>
              </LogoutButton>
            )}
          </SidebarContent>
        </Sidebar>

        <MainContent $isSidebarOpen={isOpen}>
          <Header>
            <Menu
              size={24}
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            />
            <h1>{getRouteTitle(location.pathname)}</h1>
          </Header>
          <Content>
            <Outlet />
          </Content>
        </MainContent>
      </LayoutContainer>
    </GlobalWrapper>
  );
};

export default DashboardLayout;
