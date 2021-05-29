import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Inner = styled.div`
  position: absolute;
  z-index: 11;
  background-color: yellow;
  height: 70vh;
  width: 40vw;
`;

export const Label = styled.label``;

export const Input = styled.input``;
