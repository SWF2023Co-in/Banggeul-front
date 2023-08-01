import styled from "styled-components";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import {
  StepsContainer,
  RegisterTitle,
  GrayColorFont,
  InfoDiv,
  InfoTitle,
  IsEnteredInterface,
  IsClickedProps,
} from "@/components/register/steps";
import { selectedRentalTypeState } from "@/lib/states";
import { useRecoilState } from "recoil";

import NewHomeTop from "@/components/register/NewHomeTop";
import FindAddress from "@/components/register/FindAddress";
import Image from "next/image";
import { useRouter } from "next/router";

const Step1 = () => {
  const completedSteps = ["step1"];

  const router = useRouter();

  // const [rentalType, setRentalType] = useState("");
  const [rentalType, setRentalType] = useRecoilState(
    //전세, 월세
    selectedRentalTypeState
  );
  const handleRentalTypeButtonClick = (rentalType: string) => {
    setRentalType(rentalType);
  };

  const [roomType, setRoomType] = useState(""); //아파트, 오피스텔, 빌라, 원룸
  const handleRoomTypeButtonClick = (roomType: string) => {
    setRoomType(roomType);
  };

  const [enroll_home, setEnroll_home] = useState({
    address: "",
    addressDetail: "",
  });
  const [isEnteredEnroll_homeAddress, setIsEnteredEnroll_homeAddress] = //주소
    useState(false);
  const [
    //상세주소
    isEnteredEnroll_homeAddressDetail,
    setIsEnteredEnroll_homeAddressDetail,
  ] = useState(false);
  const handleInputAddress = (e: any) => {
    setEnroll_home({
      ...enroll_home,
      [e.target.name]: e.target.value,
    });
  };

  const [popup, setPopup] = useState(false); //주소찾기 창 나오는 여부
  const handleComplete = (data: any) => {
    // setPopup(!popup);
    setPopup(true);
  };

  useEffect(() => {
    //입력창에 입력되면 회색창이 사라지게 하기 위해
    if (enroll_home.address !== "") {
      setIsEnteredEnroll_homeAddress(true);
      setPopup(false);
    }
    if (enroll_home.addressDetail !== "") {
      setIsEnteredEnroll_homeAddressDetail(true);
    }
  }, [enroll_home.address, enroll_home.addressDetail]);

  const handleGoNextButtonClick = () => {
    //다음 버튼 눌렀을 때 실행되는 함수
    if (
      //값을 모두 입력했는지 확인
      rentalType !== "" &&
      roomType !== "" &&
      enroll_home.address !== "" &&
      enroll_home.addressDetail !== ""
    ) {
      router.push("/register/newHome/step2");
    }
  };

  return (
    <StepsContainer>
      {popup && (
        <FindAddress
          company={enroll_home}
          setcompany={setEnroll_home}
        ></FindAddress>
      )}
      <NewHomeTop completedSteps={completedSteps}></NewHomeTop>;
      <Step1Bottom
        handleInputAddress={handleInputAddress}
        enroll_home={enroll_home}
        handleComplete={handleComplete}
        rentalType={rentalType}
        handleRentalTypeButtonClick={handleRentalTypeButtonClick}
        roomType={roomType}
        handleRoomTypeButtonClick={handleRoomTypeButtonClick}
        isEnteredEnroll_home={isEnteredEnroll_homeAddress}
        isEnteredEnroll_homeAddressDetail={isEnteredEnroll_homeAddressDetail}
        popup={popup}
        handleGoNextButtonClick={handleGoNextButtonClick}
      ></Step1Bottom>
    </StepsContainer>
  );
};

export default Step1;

interface Step1BottomProps {
  handleInputAddress: any;
  enroll_home: any;
  handleComplete: any;
  rentalType: string;
  handleRentalTypeButtonClick: any;
  roomType: string;
  handleRoomTypeButtonClick: any;
  isEnteredEnroll_home: boolean;
  isEnteredEnroll_homeAddressDetail: boolean;
  popup: boolean;
  handleGoNextButtonClick: any;
}

const Step1Bottom = ({
  handleInputAddress,
  enroll_home,
  handleComplete,
  rentalType,
  handleRentalTypeButtonClick,
  roomType,
  handleRoomTypeButtonClick,
  isEnteredEnroll_home,
  isEnteredEnroll_homeAddressDetail,
  popup,
  handleGoNextButtonClick,
}: Step1BottomProps) => {
  return (
    <RegisterWrapper popup={popup}>
      <RegisterTitle>
        <GrayColorFont>Step 1 </GrayColorFont>기본정보 등록하기
      </RegisterTitle>
      <InfosWrapper>
        <InfoDiv>
          <InfoTitle>유형</InfoTitle>
          <TwoButtonDiv>
            <LongButton
              isClicked={"lumpsum" == rentalType}
              onClick={() => {
                handleRentalTypeButtonClick("lumpsum");
              }}
            >
              전세
            </LongButton>
            <LongButton
              isClicked={"monthly" == rentalType}
              onClick={() => {
                handleRentalTypeButtonClick("monthly");
              }}
            >
              월세
            </LongButton>
          </TwoButtonDiv>
        </InfoDiv>
        <InfoDiv>
          <InfoTitle>주거 형태</InfoTitle>
          <TwoButtonDiv style={{ marginBottom: "12px" }}>
            <LongButton
              isClicked={"flat" == roomType}
              onClick={() => {
                handleRoomTypeButtonClick("flat");
              }}
            >
              {"flat" === roomType ? (
                <img
                  src="/img/register/newHome/step1/smallFlatAfterClicked.svg"
                  style={{ marginRight: "10px" }}
                />
              ) : (
                <img
                  src="/img/register/newHome/step1/smallFlatBeforeClicked.svg"
                  style={{ marginRight: "10px" }}
                />
              )}
              아파트
            </LongButton>
            <LongButton
              isClicked={"officetel" == roomType}
              onClick={() => {
                handleRoomTypeButtonClick("officetel");
              }}
            >
              {"officetel" === roomType ? (
                <img
                  src="/img/register/newHome/step1/smallOfficetelAfterClicked.svg"
                  style={{ marginRight: "10px" }}
                />
              ) : (
                <img
                  src="/img/register/newHome/step1/smallOfficetelBeforeClicked.svg"
                  style={{ marginRight: "10px" }}
                />
              )}
              오피스텔
            </LongButton>
          </TwoButtonDiv>
          <TwoButtonDiv>
            <LongButton
              isClicked={"villa" == roomType}
              onClick={() => {
                handleRoomTypeButtonClick("villa");
              }}
            >
              {"villa" === roomType ? (
                <img
                  src="/img/register/newHome/step1/smallVillaAfterClicked.svg"
                  style={{ marginRight: "10px" }}
                />
              ) : (
                <img
                  src="/img/register/newHome/step1/smallVillaBeforeClicked.svg"
                  style={{ marginRight: "10px" }}
                />
              )}
              빌라
            </LongButton>
            <LongButton
              isClicked={"oneRoom" == roomType}
              onClick={() => {
                handleRoomTypeButtonClick("oneRoom");
              }}
            >
              {"oneRoom" === roomType ? (
                <img
                  src="/img/register/newHome/step1/smallOneRoomAfterClicked.svg"
                  style={{ marginRight: "10px" }}
                />
              ) : (
                <img
                  src="/img/register/newHome/step1/smallOneRoomBeforeClicked.svg"
                  style={{ marginRight: "10px" }}
                />
              )}
              원룸
            </LongButton>
          </TwoButtonDiv>
        </InfoDiv>
        <InfoDiv>
          <InfoTitle>위치 정보</InfoTitle>
          <Longinput
            // placeholder="주소"
            type="text"
            required={true}
            name="address"
            onChange={handleInputAddress}
            value={enroll_home.address}
            isEntered={isEnteredEnroll_home}
            disabled
          />
          <FindAddressButtonDiv style={{ marginTop: "8px" }}>
            <FindAddressButton onClick={handleComplete}>
              <img
                src="/img/register/newHome/step1/findAddress.svg"
                style={{ marginRight: "4px" }}
              />
              주소 검색
            </FindAddressButton>
          </FindAddressButtonDiv>
        </InfoDiv>
        <InfoDiv>
          <InfoTitle>상세 주소</InfoTitle>
          <Longinput
            // placeholder="상세주소"
            type="text"
            required={true}
            name="addressDetail"
            onChange={handleInputAddress}
            value={enroll_home.addressDetail}
            isEntered={isEnteredEnroll_homeAddressDetail}
            onFocus={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          />
        </InfoDiv>
      </InfosWrapper>
      <GoNextImageWrapper>
        <GoNextImageDiv onClick={handleGoNextButtonClick}>
          <Image
            src="/img/register/newHome/nextButton.svg"
            alt="nextButton"
            width={169}
            height={56}
          />
          <GoNextMessage>다음</GoNextMessage>
        </GoNextImageDiv>
      </GoNextImageWrapper>
    </RegisterWrapper>
  );
};

interface VisibilityProps {
  popup: boolean;
}

const RegisterWrapper = styled.div<VisibilityProps>`
  position: absolute;
  z-index: 1;

  background-color: white;

  height: 650px; //

  width: 100%;

  top: 192px;

  display: flex;
  justify-content: center;

  visibility: ${(props) => (props.popup ? "hidden" : "visible")};

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

const TwoButtonDiv = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;

  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const LongButton = styled.div<IsClickedProps>`
  width: 169px;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 19px;
  font-weight: 500;

  background-color: ${(props) => (props.isClicked ? "black" : "white")};
  color: ${(props) => (props.isClicked ? "#BFFA00" : "black")};

  border: 1px solid #d7dbde; //없애면 안됨
  border-radius: 35px;
  box-sizing: border-box;
`;

const Longinput = styled.input<IsEnteredInterface>`
  width: 350px;
  height: 49px;

  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: 400;

  padding-left: 15px;

  background-color: ${(props) => (props.isEntered ? "white" : "#F3F3F3")};

  border-radius: 41px;
  border: ${(props) => (props.isEntered ? "1px solid #d7dbde" : "none")};
  box-sizing: border-box;
`;

const FindAddressButtonDiv = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: flex-end;

  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const FindAddressButton = styled.div`
  width: 99px;
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #b3b3b3;
  font-size: 13px;
  font-weight: 400;

  border: 1px solid #b3b3b3; //없애면 안됨
  border-radius: 20px;
  box-sizing: border-box;
`;

///GoNextButton
const GoNextImageWrapper = styled.div`
  position: absolute;
  width: 350px;
  height: 56px;

  display: flex;
  justify-content: flex-end;

  top: 655px;
  /* margin-top: 30px; */

  margin-bottom: 20px;
  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const GoNextImageDiv = styled.div`
  position: relative;
`;

const GoNextMessage = styled.div`
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
