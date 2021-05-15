import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 20em;
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 1em;
  left: 2px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: #666;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
`;

export const Input = styled.input<{ valid: boolean }>`
  height: ${(props) => props.theme.fontSizes.medium};
  max-width: 20em;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  outline: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.blue};
  &:valid,
  &:focus {
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.blue};
  }
  &:valid + ${Placeholder}, &:focus + ${Placeholder} {
    top: 0.5em;
    left: 0.25em;
    padding: 0 0.25em;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSizes.small};
    background-color: white;
    color: ${(props) => props.theme.colors.blue};
    &:after {
      content: ":";
    }
  }
`;

export const Field = styled.label`
  position: relative;
  height: 3em;
  width: 20em;
  padding-top: 1em;
  padding-bottom: 0.25em;
`;

export const Error = styled.label`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: red;
  min-height: 1.5em;
  white-space: pre-wrap;
`;
