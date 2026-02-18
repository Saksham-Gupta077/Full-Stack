import React, { Suspense, lazy } from "react";
import "./App.css";

// Lazy loaded single component
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div className="page-wrapper">

      <header className="app-header">
        <h1>Dashboard</h1>
      </header>

      <div className="content">
        <Suspense fallback={<div className="loader">Loading Dashboard...</div>}>
          <div className="card">
            <Dashboard />
          </div>
        </Suspense>
      </div>

    </div>
  );
}

export default App;
