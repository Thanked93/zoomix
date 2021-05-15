import React, { useState } from "react";
import { useHistory } from "react-router";
import CustomForm from "../../../components/customForm";
import { useAuth } from "../../../context/auth";
import { Content, Footer, FooterLink, Outer, Title } from "../styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const { loginWithEmailPassword } = useAuth();

  const history = useHistory();

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    try {
      setLoading(true);
      await loginWithEmailPassword(email, password);
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Outer>
      <Content>
        <Title>Login</Title>
        <CustomForm onSubmit={submit}>
          <CustomForm.Input
            value={email}
            placeholder="Email"
            onChange={setEmail}
            error={emailError}
          />
          <CustomForm.Input
            value={password}
            placeholder="Password"
            type="password"
            onChange={setPassword}
            error={passwordError}
          />
          <CustomForm.SubmitButton disabled={loading}>
            submit
          </CustomForm.SubmitButton>
        </CustomForm>
        <Footer>
          Don't have an account yet?{" "}
          <FooterLink to="/register">Register</FooterLink>
        </Footer>
      </Content>
    </Outer>
  );
};

export default Login;
