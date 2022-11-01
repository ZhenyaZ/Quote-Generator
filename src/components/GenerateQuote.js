import React from "react";
import "../App.css";
function GenerateQuote() {
  const adress = "http://localhost:3004/quotes";
  const [quotes, setQuotes] = React.useState("");

  function Request() {
    fetch(adress)
      .then((response) => {
        var ResponseJson = response.json();
        return ResponseJson;
      })
      .then((ResponseJson) => {
        var randId = Math.round(Math.random() * ResponseJson.length);
        setQuotes(ResponseJson[randId].title);
      });
  }
  return (
    <div className="GenerateQuote">
      <div className="GeneratedQuotes">
        <p>{quotes}</p>
      </div>
      <div className="QuoteBtn">
        <input type={"button"} value="Generate" onClick={Request} id="request-btn"></input>
        <input type={"button"} value="Clear" onClick={() => {setQuotes("");}} id="clear-btn"></input>
      </div>
    </div>
  );
}

export default GenerateQuote;
