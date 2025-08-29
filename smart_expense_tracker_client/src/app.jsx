import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ExpensesPage from "./pages/ExpensesPage";
import InsightsPage from "./pages/InsightsPage";
import BudgetsPage from "./pages/BudgetsPage";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import AuthWrapper from "./components/auth/AuthWrapper";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        {/* Header stays visible on all pages except login/signup */}
        <Routes>
          <Route
            path="/login"
            element={<LoginForm />}
          />
          <Route
            path="/signup"
            element={<SignupForm />}
          />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <AuthWrapper>
                <Header />
                <main className="flex-1 p-4">
                  <DashboardPage />
                </main>
                <Navbar />
              </AuthWrapper>
            }
          />
          <Route
            path="/expenses"
            element={
              <AuthWrapper>
                <Header />
                <main className="flex-1 p-4">
                  <ExpensesPage />
                </main>
                <Navbar />
              </AuthWrapper>
            }
          />
          <Route
            path="/insights"
            element={
              <AuthWrapper>
                <Header />
                <main className="flex-1 p-4">
                  <InsightsPage />
                </main>
                <Navbar />
              </AuthWrapper>
            }
          />
          <Route
            path="/budgets"
            element={
              <AuthWrapper>
                <Header />
                <main className="flex-1 p-4">
                  <BudgetsPage />
                </main>
                <Navbar />
              </AuthWrapper>
            }
          />

          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
