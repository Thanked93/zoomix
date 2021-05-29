import React, { useState } from "react";
import CustomForm from "../../../components/customForm";
import { useAuth } from "../../../context/auth";
import { Content, Footer, FooterLink, Outer, Title } from "../styles";
import { resetPassword } from "../../../firebase/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setError("");
    setMessage("Check your inbox.");
    try {
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox.");
    } catch (error) {
      setError("Failed to reset the password");
      setLoading(false);
    }
  }

  return (
    <Outer>
      <Content>
        <Title>Forgot password</Title>
        <CustomForm onSubmit={submit}>
          <CustomForm.Input value={email} placeholder='Email' onChange={setEmail} />
          <CustomForm.Message isError={true}>{error}</CustomForm.Message>
          <CustomForm.Message isError={false}>{message}</CustomForm.Message>
          <CustomForm.SubmitButton disabled={loading}>Reset</CustomForm.SubmitButton>
        </CustomForm>
        <Footer>
          Remember the password? <FooterLink to='/login'>Login</FooterLink>
        </Footer>
      </Content>
    </Outer>
  );
};

export default ResetPassword;
