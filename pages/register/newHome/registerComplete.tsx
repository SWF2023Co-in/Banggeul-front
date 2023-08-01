import { styled } from "styled-components";
import { useRouter } from "next/router";

const RegisterComplete = () => {
  const router = useRouter();
  const handleGoCompleteButtonClick = () => {
    router.replace("/");
  };

  return (
    <StepsContainer>
      <img
        src="/img/register/newHome/registerComplete/registerHomeComplete.svg"
        alt="registerHomeComplete"
        width={162}
        height={154}
        style={{ marginTop: "110px" }}
      />
      <RegisterHomeCompleteMessage>
        내 집 등록하기가
        <br />
        완료됐어요!
      </RegisterHomeCompleteMessage>
      <RegisteredHomeInfoDiv>
        <RegisteredHomeInfoDivTitle>내 집 정보</RegisteredHomeInfoDivTitle>
        <TwoInfoDiv>
          <SmallInfoDiv>
            <SmallInfoKey>보증금</SmallInfoKey>
            <SmallInfoValue>500만원</SmallInfoValue>
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoKey>월세</SmallInfoKey>
            <SmallInfoValue>50만원</SmallInfoValue>
          </SmallInfoDiv>
        </TwoInfoDiv>
        <TwoInfoDiv>
          <SmallInfoDiv>
            <SmallInfoKey>크기</SmallInfoKey>
            <SmallInfoValue>23㎡</SmallInfoValue>
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoKey>평수</SmallInfoKey>
            <SmallInfoValue>7평</SmallInfoValue>
          </SmallInfoDiv>
        </TwoInfoDiv>
        <TwoInfoDiv>
          <SmallInfoDiv>
            <SmallInfoKey>관리비</SmallInfoKey>
            <SmallInfoValue>6만원</SmallInfoValue>
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoKey>구조</SmallInfoKey>
            <SmallInfoValue>원룸(오픈형)</SmallInfoValue>
          </SmallInfoDiv>
        </TwoInfoDiv>
      </RegisteredHomeInfoDiv>
      <CompleteButton onClick={handleGoCompleteButtonClick}>
        확인
      </CompleteButton>
    </StepsContainer>
  );
};

export default RegisterComplete;

const StepsContainer = styled.div`
  position: relative;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  width: 100%;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const RegisterHomeCompleteMessage = styled.div`
  text-align: center;

  font-size: 25px;
  font-weight: 700;

  color: black;

  margin-top: 18px;

  /* border: 1px solid red; */
`;

const RegisteredHomeInfoDiv = styled.div`
  position: relative;
  width: 284px;

  margin-top: 42px;

  /* border: 1px solid green;
  box-sizing: border-box; */
`;

const RegisteredHomeInfoDivTitle = styled.div`
  width: 100%;
  height: 48px;

  margin-bottom: 41px;

  top: 0px;
  left: 0px;

  font-size: 20px;
  font-weight: 500;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #d7dbde;
`;

const TwoInfoDiv = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  //보려면 이거 필요
  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const SmallInfoDiv = styled.div`
  position: relative;

  width: 48%;
  height: 26px;

  display: flex;
  align-items: center;

  /* border: 1px solid red;
  box-sizing: border-box; */
`;

const SmallInfoKey = styled.div`
  position: absolute;

  height: 20px;

  font-size: 17px;
  font-weight: 500;

  color: black;

  left: 0px;

  /* border: 1px solid red;
  box-sizing: border-box; */
`;

const SmallInfoValue = styled.div`
  position: absolute;

  height: 20px;

  font-size: 15px;
  font-weight: 500;

  color: #797979;

  text-align: center;
  align-content: center;

  left: 60px;

  /* border: 1px solid red;
  box-sizing: border-box; */
`;

const CompleteButton = styled.button`
  width: 350px;
  height: 60px;

  margin-top: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 20px;
  font-weight: 500;

  color: #bffa00;

  border-radius: 10px;

  background-color: black;
`;