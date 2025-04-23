import logo from "./logo.svg";
import "./App.css";
import Sample2 from "./components/Sample2";
import SampleUseEffect from "./components/SampleUseEffect";
import TimerContainer from "./components/TimerContainer";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./context/AppContext";
import B from "./components/B";
import SampleReducer from "./components/SampleReducer";
import CompB from "./components/CompB";
import CompC from "./components/CompC";

import React, { useReducer } from "react";
import Memo from "./components/Memo";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ dispatchProvided: dispatch }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Sample2 /> */}
          {/* <SampleUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch />
          <B /> */}
          {/* <SampleReducer /> */}
          {/* Count {count}
          <CompB /> */}
          <Memo />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
