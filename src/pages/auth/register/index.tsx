import React, { useState } from "react";
import { useHistory } from "react-router";
import CustomForm from "../../../components/customForm";
import { useAuth } from "../../../context/auth";
import { Content, Footer, FooterLink, Outer, Title } from "../styles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [confPasswordError, setConfPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  const { registerEmailPassword } = useAuth();

  const history = useHistory();

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (password !== confPassword) {
      return setConfPasswordError("Passwords do not match.");
    }
    try {
      setLoading(true);
      setConfPasswordError("");
      setPasswordError("");
      setEmailError("");
      await registerEmailPassword(email, password);
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Outer>
      <Content>
        <Title>Register</Title>
        <CustomForm onSubmit={submit}>
          <CustomForm.Input
            value={email}
            placeholder="Email"
            onChange={setEmail}
            error={emailError}
          />
          <CustomForm.Input
            value={password}
            onChange={setPassword}
            placeholder="Password"
            type="password"
            error={passwordError}
          />
          <CustomForm.Input
            value={confPassword}
            placeholder="Confirm password"
            onChange={setConfPassword}
            type="password"
            error={confPasswordError}
          />
          <CustomForm.SubmitButton disabled={loading}>
            submit
          </CustomForm.SubmitButton>
        </CustomForm>
        <Footer>
          Already have an account? <FooterLink to="/login">Login</FooterLink>
        </Footer>
      </Content>
    </Outer>
  );
};

export default Register;
