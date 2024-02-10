import { useState } from "react";
import "./App.css";
import AnalogClock from "./components/Clock/AnalogClock";
import { TextInput } from "@mantine/core";

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
        <TextInput
          label="Employee ID"
          value={employeeId}
          onChange={(e) => {
            onEmployeeIdTextChange(e);
          }}
        />
      </div>
    </>
  );
}

export default App;
