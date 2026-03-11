import ThemePanel from "./components/ThemePanel.jsx";
import CounterPanel from "./components/CounterPanel.jsx";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Experiment 1: Global State with React Context API</h1>
      <p>
        This Single Page Application shares global theme and counter state across components
        without prop drilling.
      </p>

      <ThemePanel />
      <CounterPanel />
    </div>
  );
}

export default App;
