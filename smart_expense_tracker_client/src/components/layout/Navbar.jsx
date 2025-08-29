import React from 'react';
import { TrendingUp, DollarSign, Brain, Target } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
  { id: 'expenses', label: 'Expenses', icon: DollarSign },
  { id: 'insights', label: 'AI Insights', icon: Brain },
  { id: 'budgets', label: 'Budgets', icon: Target }
];

export default function Navbar({ activePage = 'dashboard', setActivePage = () => {} }) {
  return (
    <nav className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = activePage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePage(tab.id)}
                className={`flex items-center space-x-2 py-3 px-3 border-b-2 transition duration-200 ${
                  active ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
