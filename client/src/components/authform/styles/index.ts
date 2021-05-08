import styled from "styled-components";

export const AuthformWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  min-width: 320px;
  border-radius: 20px;
  border: 3px solid ${(props) => props.theme.secondColor};
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthTitle = styled.div`
  top: 0;
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.secondColor};
`;

export const AuthError = styled.label`
  color: red;
  max-width: 250px;
  width: 250px;
  font-size: 13px;
  whitespace: pre-line;
  margin-bottom: 20px;
`;
