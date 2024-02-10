import { useState } from "react";
import "./App.css";
import AnalogClock from "./components/Clock/AnalogClock";
import { Button, TextInput } from "@mantine/core";
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
            <>
              <TextInput
                label="Employee ID"
                value={employeeId}
                onChange={(e) => {
                  onEmployeeIdTextChange(e);
                }}
              />
              <Button onClick={() => {}}>Login</Button>
            </>
          )}
        </>
      </div>
    </>
  );
}

export default App;
