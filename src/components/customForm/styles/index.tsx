import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

export const Button = styled.button`
  display: flex;
  margin-top: 2em;
  padding: 0.5em 0.25em;
  width: 120px;
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
