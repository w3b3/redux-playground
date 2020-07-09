import React, { useEffect, useState } from "react";
import "./App.css";
// import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Container from "@material-ui/core/Container";
import { callApi } from "./api";

function App() {
  // const [loading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    callApi().then((r) => {
      setApiResponse(r);
      // setLoading(false);
    });
  }, []);

  return (
    <Container className="App">
      {/*<Top show={!loading} />*/}
      <Bottom data={apiResponse} />
    </Container>
  );
}

export default App;
