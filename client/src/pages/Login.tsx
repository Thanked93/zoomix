import React, { useState } from "react";
import { useHistory } from "react-router";
import Authform from "../components/authform/Authform";
import CustomButton from "../components/customButton/CustomButton";
import { useAuth } from "../context/AuthContext";
import { PageContent } from "./styles";

export const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("234234");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [customError, setCustomError] = useState("");
  const { login } = useAuth();

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");
    setCustomError("");
    let error: string = await login(username, password);
    if (error.includes("success")) {
      history.push("/dashboard");
    } else if (error.includes("username")) {
      setUsernameError(error);
    } else if (error.includes("password")) {
      setPasswordError(error);
    } else {
      setCustomError(error);
    }
  }

  return (
    <PageContent>
      <Authform>
        <Authform.Title>Login</Authform.Title>
        <Authform.Form onSubmit={submit}>
          <Authform.Input onChange={setUsername} placeholder="Username" />
          <Authform.Error>{usernameError}</Authform.Error>
          <Authform.Input
            onChange={setPassword}
            placeholder="Password"
            type="password"
          />
          <Authform.Error>{passwordError}</Authform.Error>
          <Authform.Submit>submit</Authform.Submit>

          <Authform.Error>{customError}</Authform.Error>
        </Authform.Form>
      </Authform>
    </PageContent>
  );
};

export default Login;
