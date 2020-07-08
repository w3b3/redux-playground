import React from "react";
import "./App.css";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Top show={true} />
      <Bottom />
    </Container>
  );
}

export default App;
