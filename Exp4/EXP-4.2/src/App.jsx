import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="app-root">
      <div className="app-card">
        <h1 className="app-title">Experiment 2: Redux Counter</h1>
        <p className="app-desc">
          Centralized state management using Redux Toolkit in a React application.
        </p>
        <Counter />
      </div>
    </div>
  );
}

export default App;
