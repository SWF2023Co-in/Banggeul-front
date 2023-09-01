import NewHomeTop from "@/components/register/NewHomeTop";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { registerHomeWholeInfoState } from "@/lib/states";
import { useRecoilState } from "recoil";
import { yesString, noString } from "@/components/register/steps";

import {
  StepsContainer,
  RegisterTitle,
  GrayColorFont,
  InfoDiv,
  InfoTitle,
} from "@/components/register/steps";
import SquareBlock, { SquareDiv } from "@/components/SquareBlock";

const Step3 = () => {
  const completedSteps = ["step1", "step2", "step3"];
  return (
    <StepsContainer>
      <NewHomeTop completedSteps={completedSteps}></NewHomeTop>
      <Step3Bottom></Step3Bottom>
    </StepsContainer>
  );
};

export default Step3;

const Step3Bottom = () => {
  const router = useRouter();
  const handleGoPreviousButtonClick = () => {
    router.push("/register/newHome/step2");
  };
  const [registerHomeWholeInfo, setRegisterHomeWholeInfo] = useRecoilState(
    registerHomeWholeInfoState
  );

  const updateRegisterHomeWholeInfo = () => {
    setRegisterHomeWholeInfo({
      ...registerHomeWholeInfo,
      registryYn: yesString,
      buildingLedgerYn: yesString,
    });
  };

  const handleGoNextButtonClick = () => {
    updateRegisterHomeWholeInfo();
    console.log(registerHomeWholeInfo);
    router.push("/register/newHome/step4");
  };
  return (
    <RegisterWrapper>
      <RegisterTitle>
        <GrayColorFont>Step 3 </GrayColorFont>서류 업로드하기
      </RegisterTitle>
      <InfosWrapper>
        <InfoDiv>
          <InfoTitle>필요 서류</InfoTitle>
          <div
            style={{
              // border: "1px solid yellow",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <SquareBlock
              isSatisfied={true}
              imgSrc="/img/register/newHome/step3/registryBeforeSatisfied.svg"
              satisfiedImgSrc="/img/register/newHome/step3/registryAfterSatisfied.svg"
              name="등기부등본"
            />
            <SquareBlock
              isSatisfied={true}
              imgSrc="/img/register/newHome/step3/buildingLedgerBeforeSatisfied.svg"
              satisfiedImgSrc="/img/register/newHome/step3/buildingLedgerAfterSatisfied.svg"
              name="건축물대장"
            />
            <SquareBlock
              isSatisfied={false}
              imgSrc="/img/register/newHome/step3/deungiGwonriBeforeSatisfied.svg"
              satisfiedImgSrc="/img/register/newHome/step3/deungiGwonriAfterSatisfied.svg"
              name="등기권리증"
            />
          </div>
          <div
            style={{
              // border: "1px solid yellow",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <SquareBlock
              isSatisfied={false}
              imgSrc="/img/register/newHome/step3/ingamBeforeSatisfied.svg"
              satisfiedImgSrc="/img/register/newHome/step3/ingamBeforeSatisfied.svg"
              name="인감증명서"
            />
            <SquareBlock
              isSatisfied={false}
              imgSrc="/img/register/newHome/step3/joominChoBeforeSatisfied.svg"
              satisfiedImgSrc="/img/register/newHome/step3/joominChoBeforeSatisfied.svg"
              name="주민등록초본"
            />
            <SquareDiv style={{ visibility: "hidden" }}></SquareDiv>
          </div>
        </InfoDiv>
      </InfosWrapper>
      <GoPreviousNextImageWrapper>
        <GoPreviousNextImageDiv onClick={handleGoPreviousButtonClick}>
          <Image
            src="/img/register/newHome/previousButton.svg"
            alt="previousButton"
            width={169}
            height={56}
          />
          <GoPreviousNextMessage style={{ color: "black" }}>
            이전
          </GoPreviousNextMessage>
        </GoPreviousNextImageDiv>
        <GoPreviousNextImageDiv onClick={handleGoNextButtonClick}>
          <Image
            src="/img/register/newHome/nextButton.svg"
            alt="nextButton"
            width={169}
            height={56}
          />
          <GoPreviousNextMessage>다음</GoPreviousNextMessage>
        </GoPreviousNextImageDiv>
      </GoPreviousNextImageWrapper>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  position: absolute;
  z-index: 1;

  background-color: white;

  height: 390px; //

  width: 100%;

  top: 192px;

  display: flex;
  justify-content: center;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const InfosWrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column; /* 자식 요소들을 세로 방향으로 배치 */

  width: 350px;
  height: 100%; //

  top: 83px; //

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

///GoPreviousNextButton
const GoPreviousNextImageWrapper = styled.div`
  position: absolute;
  width: 350px;
  height: 56px;

  display: flex;
  justify-content: space-between;

  top: 410px;

  margin-bottom: 20px;
  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const GoPreviousNextImageDiv = styled.div`
  position: relative;
`;

const GoPreviousNextMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 19px;
  font-weight: 400;
  color: #bffa00;
`;
