import React, { useState } from "react";
import { useHistory } from "react-router";
import CustomForm from "../../../components/customForm";
import { useAuth } from "../../../context/auth";
import { Content, Footer, FooterLink, Outer, Title } from "../styles";

const Login: React.FC = () => {
  //input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Error state
  const [error, setError] = useState("");
  // Loading state
  const [loading, setLoading] = useState(false);

  //
  const { loginWithEmailPassword } = useAuth();
  const history = useHistory();

  //Submit
  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      await loginWithEmailPassword(email, password);
      history.push("/dashboard");
    } catch (error) {
      setError("Authentication failed.");

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
          />
          <CustomForm.Input
            value={password}
            placeholder="Password"
            type="password"
            onChange={setPassword}
          />
          <CustomForm.Message isError={true}>{error}</CustomForm.Message>

          {error && (
            <FooterLink
              to="/reset-password"
              style={{ width: "100%", marginTop: "1em" }}
            >
              Reset password
            </FooterLink>
          )}
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