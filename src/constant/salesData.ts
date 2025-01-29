import { StatData } from "../types";

const salesData = [
  { day: "Mon", sales: 2400 },
  { day: "Tue", sales: 1398 },
  { day: "Wed", sales: 9800 },
  { day: "Thu", sales: 3908 },
  { day: "Fri", sales: 4800 },
  { day: "Sat", sales: 3800 },
  { day: "Sun", sales: 4300 },
];

const ANALYTICS_TITLE = "Weekly Sales Overview";
const ANALYTICS_SUB_TITLE = "Last 7 days performance";

// Calculate stats for card
const totalSales = salesData?.reduce((acc, curr) => acc + curr.sales, 0);
const averageSales = totalSales / salesData.length;
const highestSales = Math.max(...salesData.map((day) => day?.sales));

//card to render below chart
const statData: StatData[] = [
  {
    label: "Total Sales",
    value: totalSales.toLocaleString(),
  },
  {
    label: "Average Daily Sales",
    value: averageSales.toLocaleString(),
  },
  {
    label: "Highest Daily Sales",
    value: highestSales.toLocaleString(),
  },
];

export {
  salesData,
  totalSales,
  averageSales,
  highestSales,
  statData,
  ANALYTICS_SUB_TITLE,
  ANALYTICS_TITLE,
};
