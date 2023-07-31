import NewHomeTop from "@/components/register/NewHomeTop";
import styled from "styled-components";

import {
  StepsContainer,
  RegisterTitle,
  GrayColorFont,
} from "@/components/register/steps";

const Step4 = () => {
  const completedSteps = ["step1", "step2", "step3", "step4"];
  return (
    <StepsContainer>
      <NewHomeTop completedSteps={completedSteps}></NewHomeTop>
      <Step4Bottom></Step4Bottom>
    </StepsContainer>
  );
};

export default Step4;

const Step4Bottom = () => {
  return (
    <RegisterWrapper>
      <RegisterTitle>
        <GrayColorFont>Step 4 </GrayColorFont>상세정보 남기기
      </RegisterTitle>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  position: absolute;
  z-index: 1;

  background-color: white;

  height: 600px; //

  width: 100%;

  top: 192px;

  display: flex;
  justify-content: center;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;
