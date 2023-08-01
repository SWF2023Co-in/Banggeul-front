import styled from "styled-components";

export const StepsContainer = styled.div`
  position: relative;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  border: 1px solid green;
  box-sizing: border-box;
`;

export const RegisterTitle = styled.div`
  position: absolute;
  z-index: 2;

  height: 32px;

  font-size: 24px;
  font-weight: 600;

  top: 39px;
  left: 17px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

export const GrayColorFont = styled.span`
  color: #adadad;
  margin-right: 10px;
`;

export const InfoDiv = styled.div`
  position: relative;

  width: 100%;
  margin-bottom: 23px;

  display: flex;
  flex-direction: column; /* 자식 요소들을 세로 방향으로 배치 */

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

export const InfoTitle = styled.div`
  position: relative;

  height: 32px;

  top: 0px;
  left: 0px;

  display: flex;
  align-items: center;

  font-size: 19px;
  font-weight: 500;

  margin-bottom: 11px;

  /* border: 1px solid yellow;
  box-sizing: border-box; */
`;

export interface IsEnteredInterface {
  isEntered: boolean;
}

export interface IsClickedProps {
  isClicked?: boolean;
}

export const yesString = "YES";
export const noString = "NO";
