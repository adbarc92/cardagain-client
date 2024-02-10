import { useState } from "react";
import "./App.css";
import AnalogClock from "./components/Clock/AnalogClock";
import WorkerStatus from "./components/WorkerStatus";

function App() {
  const [jwt, setJwt] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const onEmployeeIdTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeId(e.target.value);
  };

  return (
    <>
      <AnalogClock />
      <h1>CardAgain</h1>
      <div>
        <>
          {jwt.length > 0 ? (
            <WorkerStatus />
          ) : (
            <>{/** Here goes the login component */}</>
          )}
        </>
      </div>
    </>
  );
}

export default App;
