import logo from "./logo.svg";
import "./App.css";
import Sample2 from "./components/Sample2";
import SampleUseEffect from "./components/SampleUseEffect";
import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Sample2 /> */}
        {/* <SampleUseEffect /> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;
