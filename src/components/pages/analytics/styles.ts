import styled from "styled-components";

const DashboardContainer = styled.div`
  background: #fff;
  width: 100vw;
  height: 100vh;
  padding: 16px;
  overflow: hidden;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #1a1a1a;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
`;

const Subtitle = styled.p`
  color: #666;
  margin: 0;
`;

const ChartContainer = styled.div`
  height: 60vh;
  width: 100vw;
  overflow: hidden;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  width: 90vw;
`;

const StatCard = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 0.875rem;
`;

export {
  ChartContainer,
  DashboardContainer,
  Header,
  StatCard,
  StatLabel,
  StatValue,
  StatsContainer,
  Subtitle,
  Title,
};
