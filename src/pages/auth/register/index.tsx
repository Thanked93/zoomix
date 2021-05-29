import React, { useState } from "react";
import { useHistory } from "react-router";
import CustomForm from "../../../components/customForm";
import { useAuth } from "../../../context/auth";
import { Content, Footer, FooterLink, Outer, Title } from "../styles";
import { registerEmailPassword } from "../../../firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (password !== confPassword) {
      return setError("Passwords do not match.");
    }
    try {
      setLoading(true);
      await registerEmailPassword(email, password);
      history.push("/dashboard");
    } catch (error) {
      setError("Authentiction failed.");
      setLoading(false);
    }
  }

  return (
    <Outer>
      <Content>
        <Title>Register</Title>
        <CustomForm onSubmit={submit}>
          <CustomForm.Input value={email} placeholder='Email' onChange={setEmail} />
          <CustomForm.Input value={password} onChange={setPassword} placeholder='Password' type='password' />
          <CustomForm.Input
            value={confPassword}
            placeholder='Confirm password'
            onChange={setConfPassword}
            type='password'
          />
          <CustomForm.Message isError={true}>{error}</CustomForm.Message>
          <CustomForm.SubmitButton disabled={loading}>submit</CustomForm.SubmitButton>
        </CustomForm>
        <Footer>
          Already have an account? <FooterLink to='/login'>Login</FooterLink>
        </Footer>
      </Content>
    </Outer>
  );
};

export default Register;
