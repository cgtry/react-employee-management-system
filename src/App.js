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
    <div>
      <Member1 />

      <div className="mb-5"></div>
      <Member2 />

      <div className="mb-5"></div>
      <Member3 />
    </div>
  );
}

export default App;
