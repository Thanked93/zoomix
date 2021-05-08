import React, { useState } from "react";
import Authform from "../components/authform/Authform";
import CustomButton from "../components/customButton/CustomButton";
import { PageContent } from "./styles";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router";

const Register: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [pce, setPce] = useState("");
  const [customError, setCustomError] = useState("");
  const { register } = useAuth();

  async function submit(e: any) {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");
    setPce("");
    setCustomError("");
    if (passwordConfirmation !== password) {
      setPce("Passwords do not match");
      return;
    }
    let res: string = await register(username, password);
    if (res.includes("success")) {
      history.push("/dashboard");
    } else if (res.includes("username")) {
      setUsernameError(res);
    } else if (res.includes("password")) {
      setPasswordError(res);
    } else {
      setCustomError(res);
    }
  }

  return (
    <PageContent>
      <Authform>
        <Authform.Title>Register</Authform.Title>
        <Authform.Form onSubmit={submit}>
          <Authform.Input onChange={setUsername} placeholder="Username" />
          <Authform.Error>{usernameError}</Authform.Error>
          <Authform.Input
            onChange={setPassword}
            placeholder="Password"
            type="password"
          />
          <Authform.Error>{passwordError}</Authform.Error>
          <Authform.Input
            onChange={setPasswordConfirmation}
            placeholder="Password confirmation"
            type="password"
          />
          <Authform.Error>{pce}</Authform.Error>
          <Authform.Submit>submit</Authform.Submit>
          <Authform.Error>{customError}</Authform.Error>
        </Authform.Form>
      </Authform>
    </PageContent>
  );
};

export default Register;
