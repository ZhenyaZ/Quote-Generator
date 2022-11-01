import "./App.css";
import React from "react";
import GenerateQuote from "./components/GenerateQuote";

function App() {
  // Hooks
  const [visible, setVisible] = React.useState(false);
  const [start, setStart] = React.useState("Start");

  // Handlers&Func
  function ToggleVisible(e) {
    setVisible((visible) => !visible);
    if (e.target.value === "Start") {
      setStart("End");
    } else {
      setStart("Start");
    }
  }

  return (
    <div className="App">
      <div className="Welcome-title">
        <h1>Welcome to the Quote Generate</h1>
      </div>
      {visible && <GenerateQuote />}
      <input type={"button"} onClick={(e) => {ToggleVisible(e);}} value={start} id="start-btn"></input>
    </div>
  );
}

export default App;
