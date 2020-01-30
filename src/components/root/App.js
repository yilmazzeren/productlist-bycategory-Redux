import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Container>
        <Navi />
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
