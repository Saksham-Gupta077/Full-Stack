import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

const Home = lazy(() =>
  import("./Pages").then((m) => ({ default: m.Home }))
);

const About = lazy(() =>
  import("./Pages").then((m) => ({ default: m.About }))
);

const Contact = lazy(() =>
  import("./Pages").then((m) => ({ default: m.Contact }))
);

// Delay Component (2-sec forced loading)
function Delay({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return loading ? <div className="loading">Loading...</div> : children;
}

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <h1>Route-Based Lazy Loading</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes location={location}>
          <Route
            path="/"
            element={
              <Delay key={location.pathname}>
                <Home />
              </Delay>
            }
          />
          <Route
            path="/about"
            element={
              <Delay key={location.pathname}>
                <About />
              </Delay>
            }
          />
          <Route
            path="/contact"
            element={
              <Delay key={location.pathname}>
                <Contact />
              </Delay>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
