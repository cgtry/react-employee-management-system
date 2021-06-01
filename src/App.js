import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <Member1></Member1>

      <div className="mb-5"></div>
      <Member2 />

      <div className="mb-5"></div>
      <Member3 />

      <div className="mb-5"></div>
      <Member4></Member4>
    </div>
  );
}

function Member1() {
  return (
    <div>
      <h1>Member 1 - Registeration</h1>
      <div>
        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Username"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Password"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Email"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Mobile"
            className="form-control"
          />
        </div>

        <div className="mb-1">
          <input
            type="button"
            value="Register"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </div>
  );
}

function Member2() {
  return (
    <div>
      <h1>Member 2 - Login Module</h1>
      <div className="mb-1">
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control"
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          placeholder="Enter Password"
          className="form-control"
        />
      </div>

      <div>
        <Button className="w-100">Login Here</Button>
      </div>
    </div>
  );
}

function Member3() {
  return (
    <div>
      <h1>Forgot Password Module</h1>

      <div className="mb-1">
        <input
          type="text"
          placeholder="Enter Username"
          className="form-control"
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          placeholder="Old Password"
          className="form-control"
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          placeholder="New Password"
          className="form-control"
        />
      </div>

      <div className="mb-1">
        <input
          type="text"
          placeholder="Re Enter New Password"
          className="form-control"
        />
      </div>

      <div>
        <input
          type="button"
          value="Reset Password"
          className="btn btn-primary w-100"
        />
      </div>
    </div>
  );
}

function Member4() {
  return (
    <div>
      <div>
        <h2>Member 4 module</h2>{" "}
      </div>
    </div>
  );
}

export default App;
