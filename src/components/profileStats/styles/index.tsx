import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;

  justify-content: center;
  margin: 3em;
`;

export const Container = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900) {
  }
`;

export const Element = styled.div`
  display: flex;
  padding: 5px 5px;
  margin-top: 1em;
`;

export const Img = styled.img`
  height: 200px;
  width: 250px;
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 50%;
  border: 20px solid ${(props) => props.theme.colors.blue};
  overflow: hidden;
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 600;
  padding: 0 5px;
`;

export const Item = styled.label`
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 0 5px;
`;

export const ChangeButton = styled.button`
  margin-left: 1em;
`;
