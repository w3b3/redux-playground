import React, { useEffect, useState } from "react";
import "./App.css";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Container from "@material-ui/core/Container";
import { callApi } from "./api";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootStore = store();
function App() {
  const [loading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    callApi().then((r) => {
      setApiResponse(r);
      setLoading(false);
    });
  }, []);

  return (
    <Provider store={rootStore}>
      <Container className="App">
        <Top loading={loading} />
        <Bottom data={apiResponse} loading={loading} />
      </Container>
    </Provider>
  );
}

export default App;
