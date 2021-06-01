import { Button } from "react-bootstrap";

export function Member2() {
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
