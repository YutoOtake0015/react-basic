import logo from "./logo.svg";
import "./App.css";
import Sample2 from "./components/Sample2";
import SampleUseEffect from "./components/SampleUseEffect";
import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./components/AppContext";
import B from "./components/B";

function App() {
  return (
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Sample2 /> */}
          {/* <SampleUseEffect /> */}
          {/* <TimerContainer /> */}
          <ApiFetch />
          <B />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
