import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  width: 120px;
  height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  font-size: 15px;
  background-color: ${(props) => props.theme.thirdBg};
  color: ${(props) => props.theme.thirdColor};
  margin-top: 15px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.thirdBg};
    background-color: ${(props) => props.theme.thirdColor};
    border: 3px solid ${(props) => props.theme.thirdBg};
    font-weight: 600;
  }
`;
