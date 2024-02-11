import { useState } from "react";
import "./App.css";
import AnalogClock from "./components/Clock/AnalogClock";
import WorkerStatus from "./components/WorkerStatus";
import {
  ChakraProvider,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

const enum LoginState {
  LoggedOut,
  LoggedIn,
  Error,
  Loading,
}

function App() {
  const [jwt, setJwt] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [loginState, setLoginState] = useState(LoginState.LoggedOut);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeId(e.target.value);
  };

  const onEmployeeIdSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setJwt("jwt-token-value");
    // FIXME: make network request; onError, set error state
  };

  return (
    <ChakraProvider>
      <>
        <AnalogClock />
        <h1>CardAgain</h1>
        <div>
          <>
            {jwt.length > 0 ? (
              <WorkerStatus />
            ) : (
              <>
                <FormControl>
                  <FormControl isInvalid={loginState === LoginState.Error}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      value={input}
                      onChange={handleInputChange}
                    />
                    {!isError ? (
                      <FormHelperText>
                        Enter the email you'd like to receive the newsletter on.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Invalid employee ID.{" "}
                        {/** FIXME: should create button to navigate to  */}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <Button
                    colorScheme="blue"
                    onClick={() => setJwt("jwt-token-value")}
                  >
                    Login
                  </Button>
                </FormControl>
              </>
            )}
          </>
        </div>
      </>
    </ChakraProvider>
  );
}

export default App;
