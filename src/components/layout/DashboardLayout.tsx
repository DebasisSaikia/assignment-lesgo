import React, { useState } from "react";
import { Outlet, Navigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { Menu, Home, User, BarChart2, LogOut, X } from "lucide-react";
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
  transition: all 0.3s ease;
  position: fixed;
  left: 0;
  z-index: 1000;

  @media (max-width: 767px) {
    width: 100%;
    height: 50vh;
    top: 0;
    transform: translateY(${(props) => (props.$isOpen ? "0" : "-100%")});
  }

  @media (min-width: 768px) {
    height: 100vh;
    top: 0;
    bottom: 0;
    transform: none;
    width: ${(props) => (props.$isOpen ? "240px" : "70px")};
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;

const SidebarContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.header`
  background: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 767px) {
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    left: 0;
    background: white;
  }

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

const MainContent = styled.main<{ $isSidebarOpen: boolean }>`
  flex: 1;
  background: #f5f5f5;
  margin-left: ${(props) => (props.$isSidebarOpen ? "240px" : "70px")};
  transition: margin-left 0.3s ease;
  min-height: 100vh;

  @media (max-width: 767px) {
    margin-left: 0;
    padding-top: 70px;
  }
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

  @media (max-width: 767px) {
    h2 {
      margin-left: 1rem;
    }
    button {
      margin-right: 1rem;
    }
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #333;
  }

  span {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;

  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    background: #333;
  }
`;

const MenuButton = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const DashboardLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const { isAuthenticated, isLoading, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isLoading) {
    return null;
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
              <h2>Dashboard</h2>

              <ToggleButton onClick={toggleSidebar}>
                <X size={20} />
              </ToggleButton>
            </SidebarHeader>

            <NavSection>
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
            </NavSection>

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
            <MenuButton onClick={toggleSidebar}>
              <Menu size={24} />
            </MenuButton>

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
