import logo from "./logo.svg";
import "./App.css";
import Sample1 from "./components/Sample1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Sample1 name="hooks" />
      </header>
    </div>
  );
}

export default App;
