import styled from "styled-components";

export const Placeholder = styled.span`
  position: absolute;
  left: 5px;
  font-size: 16px;
  top: calc(50% + 16px);
  transform: translateY(-50%);
  color: #666;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
`;

export const Input = styled.input`
  appearance: none;
  font-size: 17px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.thirdBg};
  padding: 12px;
  width: 250px;
  outline: none;
  &:valid,
  &:focus {
    border-radius: 12px;
    border 1px solid ${(props) => props.theme.thirdBg};
    transition-delay: 0.1s;
  }

  &:valid + ${Placeholder}, &:focus + ${Placeholder} {
    top: 20px;
    font-size: 14px;
    color: ${(props) => props.theme.thirdBg};
    padding: 0 5px;
    background: ${(props) => props.theme.mainBg};
  }
`;

export const Field = styled.label`
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
`;
