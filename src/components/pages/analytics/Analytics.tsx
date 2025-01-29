import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  ANALYTICS_SUB_TITLE,
  ANALYTICS_TITLE,
  salesData,
  statData,
} from "../../../constant/salesData";
import {
  ChartContainer,
  DashboardContainer,
  Header,
  StatCard,
  StatLabel,
  StatsContainer,
  StatValue,
  Subtitle,
  Title,
} from "./styles";
import { StatData } from "../../../types";

const Analytics: React.FC = () => {
  return (
    <DashboardContainer>
      <Header>
        <Title>{ANALYTICS_TITLE}</Title>
        <Subtitle>{ANALYTICS_SUB_TITLE}</Subtitle>
      </Header>

      <ChartContainer>
        <ResponsiveContainer width="90%" height="100%">
          <BarChart width={150} data={salesData} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* for x axis to display day -mon - sunday */}
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              formatter={(value) => [`$${value}`, "Sales"]}
              labelStyle={{ color: "#666" }}
            />
            <Legend />
            <Bar
              dataKey="sales"
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
              name="Daily Sales"
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <StatsContainer>
        {statData?.map((val: StatData) => (
          <StatCard key={val.value}>
            <StatValue>{val.value}</StatValue>
            <StatLabel>{val.label}</StatLabel>
          </StatCard>
        ))}
      </StatsContainer>
    </DashboardContainer>
  );
};

export default Analytics;
