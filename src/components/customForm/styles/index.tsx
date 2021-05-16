import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

export const Button = styled.button`
  display: flex;
  margin-top: 2em;
  padding: 0.5em 0.25em;
  width: 240px;
  height: 3em;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  border: 3px solid ${(props) => props.theme.colors.blue};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const Message = styled.label<{ isError: boolean }>`
  color: ${(props) =>
    props.isError ? props.theme.colors.red : props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: ${(props) => (props.isError ? "0" : "1em")};
  width: 100%;
`;
