import styled from "styled-components";

export const Container = styled.div`
  height: 240px;
  width: 320px;
  position: relative;
  display: flex;
  flex-direction: column;

  background-color: black;
`;

export const VideoDisplay = styled.video`
  height: 100%;
  width: 100%;
`;

export const UserLabel = styled.p``;

export const VideoButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const CloseButton = styled.button`
  display: none;
  margin: 0 5px;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.dark};
  &:hover {
    cursor: pointer;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const CloseWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 2px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  &:hover ${CloseButton} {
    display: flex;
  }
`;

export const Row = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  min-height: 40px;
  width: 100%;
  background: transparent;
  &:hover ${VideoButton} {
    display: flex;
  }
`;

export const PlaceHolder = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.white};
`;
