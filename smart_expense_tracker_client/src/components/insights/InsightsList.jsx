import React from "react";
import Card from "../ui/Card";
import { Lightbulb } from "lucide-react";

export default function InsightsList({ insights }) {
  if (!insights.length) {
    return <p className="text-gray-500">No insights available yet.</p>;
  }

  return (
    <div className="space-y-4">
      {insights.map((tip, idx) => (
        <Card key={idx} className="flex items-start space-x-3">
          <Lightbulb className="w-6 h-6 text-yellow-500 mt-1" />
          <p className="text-gray-700">{tip}</p>
        </Card>
      ))}
    </div>
  );
}
