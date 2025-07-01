import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Welcome to Build2Earn</h1>
    <p>Create and monetize Fortnite maps!</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);