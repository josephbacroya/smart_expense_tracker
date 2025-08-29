import React from "react";
import Card from "../ui/Card";
import { DollarSign, TrendingUp, Wallet } from "lucide-react";

const stats = [
  { id: 1, label: "Total Expenses", value: "$1,250", icon: DollarSign, color: "text-red-500" },
  { id: 2, label: "Monthly Change", value: "+8%", icon: TrendingUp, color: "text-green-500" },
  { id: 3, label: "Remaining Budget", value: "$2,750", icon: Wallet, color: "text-blue-500" }
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map(({ id, label, value, icon: Icon, color }) => (
        <Card key={id} className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>
          <Icon className={`w-8 h-8 ${color}`} />
        </Card>
      ))}
    </div>
  );
}
