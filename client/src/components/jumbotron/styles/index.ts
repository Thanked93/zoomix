import styled from "styled-components";

export const JumbotronWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const JumbtronRow = styled.div<{ flexDirection: string }>`
  display: flex;

  flex-direction: ${({ flexDirection }) => flexDirection};
  min-height: 15vmin;
  margin-bottom: 5vmin;
  border: 2px solid ${(props) => props.theme.secondBg};
  box-shadow: 3px 3px black;
  width: 60%;
  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    min-height: auto;
  }
`;

export const JumbotronSmall = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.secondBg};
  width: 35%;
  font-size: 25px;
  font-weight: 600;
  color: ${(props) => props.theme.secondColor};
  @media (max-width: 900px) {
    font-size: 18px;
    width: 100%;
    height: 100%;
  }
`;

export const JumbotronBig = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  color: ${(props) => props.theme.mainBg};
  flex-direction: column;
  width: 65%;
  font-size: 20px;

  @media (max-width: 900px) {
    font-size: 16px;
    width: 100%;
  }
`;
