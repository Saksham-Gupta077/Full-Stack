import React, { useState, Suspense, lazy } from "react";
const Home = lazy(() =>
  Promise.resolve({
    default: () => (
      <div className="card">
        <h2>🏠 Home</h2>
        <p>Welcome to the Multi-Page SPA using Lazy Loading.</p>
      </div>
    ),
  })
);

const Services = lazy(() =>
  Promise.resolve({
    default: () => (
      <div className="card">
        <h2>🛠 Services</h2>
        <p>We provide modern web development solutions.</p>
      </div>
    ),
  })
);

const About = lazy(() =>
  Promise.resolve({
    default: () => (
      <div className="card">
        <h2>ℹ About</h2>
        <p>This experiment demonstrates lazy loading without React Router.</p>
      </div>
    ),
  })
);

const Contact = lazy(() =>
  Promise.resolve({
    default: () => (
      <div className="card">
        <h2>📞 Contact</h2>
        <p>Email: support@multispasample.com</p>
      </div>
    ),
  })
);

function Dashboard() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "services":
        return <Services />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <header className="navbar">
        <h1>LazyLoading</h1>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("services")}>Services</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </nav>
      </header>

      <main className="content">
        <Suspense fallback={<div className="loader">Loading Page...</div>}>
          {renderPage()}
        </Suspense>
      </main>
    </>
  );
}

export default Dashboard;
