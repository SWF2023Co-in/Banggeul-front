import styled from "styled-components";
import React from "react";
import { GlassButtonNewHome } from "../GlassButton";

interface NewHomeTopProps {
  completedSteps: string[];
}

const NewHomeTop = ({ completedSteps }: NewHomeTopProps) => {
  return (
    <MaskGroupWrapper>
      <MaskGroupImage
        src="/img/src/newHomeTop/maskGroupRegisterHome.svg"
        alt="maskGroupRegisterHome"
      />
      <RegisterMyHomeDiv>내 집 등록하기</RegisterMyHomeDiv>
      <StepBarWrapper>
        <StepBarLine></StepBarLine>
        <StepBarDiv>
          <StepButtonWrapper isClicked={completedSteps.includes("step1")}>
            <GlassButtonNewHome
              imgSrc="/img/src/newHomeTop/stepCheck.svg"
              isClicked={completedSteps.includes("step1")}
            />
            <p>Step 1</p>
          </StepButtonWrapper>
          <StepButtonWrapper isClicked={completedSteps.includes("step2")}>
            <GlassButtonNewHome
              imgSrc="/img/src/newHomeTop/step2.svg"
              isClicked={completedSteps.includes("step2")}
            />
            <p>Step 2</p>
          </StepButtonWrapper>
          <StepButtonWrapper isClicked={completedSteps.includes("step3")}>
            <GlassButtonNewHome
              imgSrc="/img/src/newHomeTop/step3.svg"
              isClicked={completedSteps.includes("step3")}
            />
            <p>Step 3</p>
          </StepButtonWrapper>
          <StepButtonWrapper isClicked={completedSteps.includes("step4")}>
            <GlassButtonNewHome
              imgSrc="/img/src/newHomeTop/step4.svg"
              isClicked={completedSteps.includes("step4")}
            />
            <p>Step 4</p>
          </StepButtonWrapper>
        </StepBarDiv>
      </StepBarWrapper>
    </MaskGroupWrapper>
  );
};
export default NewHomeTop;

const MaskGroupWrapper = styled.div`
  position: relative;

  height: 300px;
  width: 100%;

  top: 0 px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MaskGroupImage = styled.img`
  position: absolute;
  top: -26px;
  width: 100%;
`;

const RegisterMyHomeDiv = styled.div`
  position: absolute;
  z-index: 1;

  height: 24px;

  color: white;
  font-size: 20px;
  font-weight: 400;

  top: 20px;
`;

const StepBarWrapper = styled.div`
  position: absolute;
  z-index: 1;

  width: 254px;
  height: 57px;

  top: 94px;
`;

const StepBarLine = styled.div`
  position: absolute;
  z-index: 0;

  width: 100%;
  height: 2px;

  top: 15.6px;

  background-color: rgba(255, 255, 255, 0.25);
`;

const StepBarDiv = styled.div`
  position: absolute;
  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

interface StepButtonWrapperProps {
  isClicked: boolean;
}

const StepButtonWrapper = styled.div<StepButtonWrapperProps>`
  width: 33px;
  height: 57px;

  flex-direction: row;
  justify-content: center;

  & > p {
    //step1,2,3 글자 들어갈 곳
    text-align: center;
    color: ${(props) => (props.isClicked ? "white" : "#7A7C80")};
    font-size: 11px;
    font-weight: 400;
    margin-top: 7.8px;
    margin-bottom: 0;
  }
`;
