import React from "react";
import Container from "../components/layout/Container";
import SummaryCards from "../components/dashboard/SummaryCards";
import CategoryPieChart from "../components/dashboard/CategoryPieChart";
import MonthlyTrendChart from "../components/dashboard/MonthlyTrendChart";

export default function DashboardPage() {
  return (
    <Container>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <SummaryCards />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <CategoryPieChart />
        <MonthlyTrendChart />
      </div>
    </Container>
  );
}
