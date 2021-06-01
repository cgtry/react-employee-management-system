import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <Row style={{ height: "100vh" }}>
      <Col xs={0} md={3} className="bg-primary d-none d-md-block"></Col>
      <Col xs={12} md={6} className="bg-dark"></Col>
      <Col xs={0} md={3} className="bg-info  d-none d-md-block"></Col>
    </Row>
  );
}

export default App;
