import React from 'react';
import { DollarSign, User, LogOut } from 'lucide-react';

export default function Header({ user = { name: 'Guest' }, onLogout = () => {} }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <DollarSign className="w-8 h-8 text-indigo-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">FinanceTracker</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <User className="w-5 h-5" />
              <span className="font-medium">{user?.name}</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition duration-200"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
              <span className="sr-only">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
