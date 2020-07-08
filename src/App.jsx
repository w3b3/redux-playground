import React from "react";
import "./App.css";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

function App() {
  return (
    <main className="App">
      <Top show={true} />
      <Bottom />
    </main>
  );
}

export default App;
