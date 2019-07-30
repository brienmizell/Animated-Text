import React from "react";
import "./App.css";

// const textStyling = {
//   color: 'red',
//   web-kit-stroke-color: 'red'
// }

const App = () => {
  return (
    <div className="hint-text">
      <div className="text-line">
        <p
          className="t-bottom scale-down"
          style={{ letterSpacing: "0.11em", paddingLeft: "30px" }}
        >
          BRIEN
        </p>
        <p
          className="abs outline t-top scale-up"
          style={{ letterSpacing: "0.11em", paddingLeft: "30px" }}
        >
          BRIEN
        </p>
      </div>
      <div className="text-line">
        <p className="outline scale-down t-top">MIZELL</p>
        <p className="abs scale-up t-bottom">MIZELL</p>
      </div>
    </div>
  );
};

export default App;
