import logo from "./logo.svg";
import "./App.css";
import Sample2 from "./components/Sample2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Sample2 />
      </header>
    </div>
  );
}

export default App;
