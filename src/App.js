import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { Member1 } from "./views/Member1";
import { Member2 } from "./views/Member2";
import { Member3 } from "./views/Member3";

// TEAM LEADER
function App() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-12 col-md-6 bg-dark text-light d-flex align-items-center justify-content-center">
          <Member1></Member1>
        </div>
        <div className="col-12 col-md-6 bg-secondary text-light d-flex align-items-center justify-content-center">
          <Member2></Member2>
        </div>
      </div>
    </div>
  );
}

export default App;
