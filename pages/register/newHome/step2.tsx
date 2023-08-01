import NewHomeTop from "@/components/register/NewHomeTop";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { selectedRentalTypeState } from "@/lib/states";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

import UploadedImage from "@/components/register/UploadedImage";

import {
  StepsContainer,
  RegisterTitle,
  GrayColorFont,
  InfoDiv,
  InfoTitle,
  IsEnteredInterface,
  IsClickedProps,
  yesString,
  noString,
} from "@/components/register/steps";

import Dropdown from "@/components/Dropdown";
const Step2 = () => {
  const completedSteps = ["step1", "step2"];

  return (
    <StepsContainer>
      <NewHomeTop completedSteps={completedSteps}></NewHomeTop>
      <Step2Bottom></Step2Bottom>
    </StepsContainer>
  );
};

export default Step2;

const Step2Bottom = () => {
  const router = useRouter();
  const handleGoPreviousButtonClick = () => {
    router.push("/register/newHome/step1");
  };

  const handleGoNextButtonClick = () => {
    router.push("/register/newHome/step3");
    // //다음 버튼 눌렀을 때 실행되는 함수
    // if (
    //   //값을 모두 입력했는지 확인
    //   rentalType !== "" &&
    //   roomType !== "" &&
    //   enroll_home.address !== "" &&
    //   enroll_home.addressDetail !== ""
    // ) {
    //   router.push("/register/newHome/step2");
    // }
  };
  ////// 변수들 ///////

  const [rentalType, setRentalType] = useRecoilState(
    //전월세에 따라 다른 화면 보여주기 위해
    //전세, 월세
    selectedRentalTypeState
  );

  const [deposit, setDeposit] = useState<number | undefined>(undefined); //보증금
  const handleDeposit = (e: any) => {
    setDeposit(e.target.value);
  };
  const [isEnteredDeposit, setIsEnteredDeposit] = useState(false);

  const [rentalFee, setRentalFee] = useState<number | undefined>(undefined); //월세
  const handleRentalFee = (e: any) => {
    setRentalFee(e.target.value);
  };
  const [isEnteredRentalFee, setIsEnteredRentalFee] = useState(false);

  const structures = ["오픈형", "분리형"]; //방구조
  const [structure, setStructure] = useState<string>("");
  const [isEnteredStructure, setIsEnteredStructure] = useState(false);

  const directions = ["동향", "서향", "남향", "북향"]; //방향
  const [direction, setDirection] = useState<string>("");
  const [isEnteredDirection, setIsEnteredDirection] = useState(false);

  const [maintenanceFee, setMaintenanceFee] = useState<number | undefined>( //관리비
    undefined
  );
  const handleMaintenanceFee = (e: any) => {
    setMaintenanceFee(e.target.value);
  };
  const [isEnteredMaintenanceFee, setIsEnteredMaintenanceFee] = useState(false);

  const [electricity, setElectricity] = useState(noString); //전기세
  const handleElectricityButtonClick = () => {
    if (electricity === yesString) {
      setElectricity(noString);
    } else if (electricity === noString) {
      setElectricity(yesString);
    }
  };

  const [gas, setGas] = useState(noString); //가스
  const handleGasButtonClick = () => {
    if (gas === yesString) {
      setGas(noString);
    } else if (gas === noString) {
      setGas(yesString);
    }
  };

  const [water, setWater] = useState(noString); //수도
  const handleWaterButtonClick = () => {
    if (water === yesString) {
      setWater(noString);
    } else if (water === noString) {
      setWater(yesString);
    }
  };

  const [internet, setInternet] = useState(noString); //인터넷
  const handleInternetButtonClick = () => {
    if (internet === yesString) {
      setInternet(noString);
    } else if (internet === noString) {
      setInternet(yesString);
    }
  };

  const [area, setArea] = useState<number | undefined>(undefined); //면적
  const handleArea = (e: any) => {
    setArea(e.target.value);
    const calculatedPyeong = parseFloat((e.target.value / 3.3).toFixed(1));
    setPyeong(calculatedPyeong);
  };
  const [isEnteredArea, setIsEnteredArea] = useState(false);

  const [pyeong, setPyeong] = useState<number | undefined>(undefined); //평

  const [buildingFloor, setBuildingFloor] = useState<number | undefined>(
    undefined
  ); //건물 층
  const handleBuildingFloor = (e: any) => {
    setBuildingFloor(e.target.value);
  };
  const [isEnteredBuildingFloor, setIsEnteredBuildingFloor] = useState(false);

  const [roomFloor, setRoomFloor] = useState<number | undefined>(undefined); //해당 층
  const handleRoomFloor = (e: any) => {
    setRoomFloor(e.target.value);
  };
  const [isEnteredRoomFloor, setIsEnteredRoomFloor] = useState(false);

  const options = ["없음", "있음"]; //옵션 //영어 바꿀 필요x
  const [option, setOption] = useState<string>("없음");
  const [isEnteredOption, setIsEnteredOption] = useState(true);

  const [airConditioner, setAirConditioner] = useState(noString); //에어컨
  const handleAirConditionerButtonClick = () => {
    if (airConditioner === yesString) {
      setAirConditioner(noString);
    } else if (airConditioner === noString) {
      setAirConditioner(yesString);
    }
  };

  const [fridge, setFridge] = useState(noString); //냉장고
  const handleFridgeButtonClick = () => {
    if (fridge === yesString) {
      setFridge(noString);
    } else if (fridge === noString) {
      setFridge(yesString);
    }
  };

  const [laundry, setLaundry] = useState(noString); //세탁기
  const handleLaundryButtonClick = () => {
    if (laundry === yesString) {
      setLaundry(noString);
    } else if (laundry === noString) {
      setLaundry(yesString);
    }
  };

  const [induction, setInduction] = useState(noString); //인덕션
  const handleInductionButtonClick = () => {
    if (induction === yesString) {
      setInduction(noString);
    } else if (induction === noString) {
      setInduction(yesString);
    }
  };

  const [gasStove, setGasStove] = useState(noString); //가스레인지
  const handleGasStoveButtonClick = () => {
    if (gasStove === yesString) {
      setGasStove(noString);
    } else if (gasStove === noString) {
      setGasStove(yesString);
    }
  };

  const [microwave, setMicrowave] = useState(noString); //전자레인지
  const handleMicrowaveButtonClick = () => {
    if (microwave === yesString) {
      setMicrowave(noString);
    } else if (microwave === noString) {
      setMicrowave(yesString);
    }
  };

  const [desk, setDesk] = useState(noString); //책상
  const handleDeskButtonClick = () => {
    if (desk === yesString) {
      setDesk(noString);
    } else if (desk === noString) {
      setDesk(yesString);
    }
  };

  const [bookshelf, setBookshelf] = useState(noString); //책장
  const handleBookshelfButtonClick = () => {
    if (bookshelf === yesString) {
      setBookshelf(noString);
    } else if (bookshelf === noString) {
      setBookshelf(yesString);
    }
  };

  const [bed, setBed] = useState(noString); //침대
  const handleBedButtonClick = () => {
    if (bed === yesString) {
      setBed(noString);
    } else if (bed === noString) {
      setBed(yesString);
    }
  };

  const [closet, setCloset] = useState(noString); //옷장
  const handleClosetButtonClick = () => {
    if (closet === yesString) {
      setCloset(noString);
    } else if (closet === noString) {
      setCloset(yesString);
    }
  };

  const [sink, setSink] = useState(noString); //싱크대
  const handleSinkButtonClick = () => {
    if (sink === yesString) {
      setSink(noString);
    } else if (sink === noString) {
      setSink(yesString);
    }
  };

  const loans = ["없음", "있음"]; //전세대출
  const [loan, setLoan] = useState<string>("");
  const [isEnteredLoan, setIsEnteredLoan] = useState(false);

  const pets = ["없음", "있음"]; //반려동물
  const [pet, setPet] = useState<string>("");
  const [isEnteredPet, setIsEnteredPet] = useState(false);

  const parkings = ["없음", "있음"]; //주차
  const [parking, setParking] = useState<string>("");
  const [isEnteredParking, setIsEnteredparking] = useState(false);

  const elevators = ["없음", "있음"]; //엘리베이터
  const [elevator, setElevator] = useState<string>("");
  const [isEnteredElevator, setIsEnteredElevator] = useState(false);

  const [movingInDate, setMovingInDate] = useState(""); //입주가능일
  const [isEnteredMovingInDates, setIsEnteredMovingInDate] = useState(false);
  const handleInputMovingInDate = (e: any) => {
    setMovingInDate(e.target.value);
    console.log(movingInDate);
  };

  useEffect(() => {
    //입력창에 입력되면 회색창이 사라지게 하기 위해
    if (deposit !== undefined) {
      setIsEnteredDeposit(true);
    }
    if (rentalFee !== undefined) {
      setIsEnteredRentalFee(true);
    }
    if (structure !== "") {
      setIsEnteredStructure(true);
    }
    if (direction !== "") {
      setIsEnteredDirection(true);
    }
    if (maintenanceFee !== undefined) {
      setIsEnteredMaintenanceFee(true);
    }
    if (area !== undefined) {
      setIsEnteredArea(true);
    }
    if (buildingFloor !== undefined) {
      setIsEnteredBuildingFloor(true);
    }
    if (roomFloor !== undefined) {
      setIsEnteredRoomFloor(true);
    }
    if (option !== "없음") {
      setIsEnteredOption(true);
    }
    if (loan !== "") {
      setIsEnteredLoan(true);
    }
    if (pet !== "") {
      setIsEnteredPet(true);
    }
    if (movingInDate !== "") {
      setIsEnteredMovingInDate(true);
    }
    if (parking !== "") {
      setIsEnteredparking(true);
    }
    if (elevator !== "") {
      setIsEnteredElevator(true);
    }
  }, [
    deposit,
    rentalFee,
    structure,
    direction,
    maintenanceFee,
    area,
    buildingFloor,
    roomFloor,
    option,
    loan,
    pet,
    movingInDate,
    parking,
    elevator,
  ]);

  ////// 변수들(끝) ///////

  return (
    <RegisterWrapper isLong={option == "있음"}>
      <RegisterTitle>
        <GrayColorFont>Step 2 </GrayColorFont>방 정보 등록하기
      </RegisterTitle>
      <AlertDiv>
        <img
          src="/img/register/newHome/step2/warning.svg"
          style={{ left: "20px", position: "absolute" }}
        />
        <div>직접 찍은 방 사진 원본을 등록해주세요</div>
        <img
          src="/img/register/newHome/step2/xWarning.svg"
          style={{ right: "14px", position: "absolute" }}
        />
      </AlertDiv>
      <InfosWrapper>
        <InfoDiv>
          <InfoTitle>사진등록</InfoTitle>
          <UploadedImage />
        </InfoDiv>

        <TwoInputDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>보증금</SmallInfoTitle>
            <SmallInput
              isEntered={isEnteredDeposit}
              handleInputValue={handleDeposit}
              inputValue={deposit}
              unit="만원"
            />
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoTitle style={{ marginLeft: "10px" }}>월세</SmallInfoTitle>
            <SmallInput
              isEntered={isEnteredRentalFee}
              handleInputValue={handleRentalFee}
              inputValue={rentalFee}
              unit="만원"
            />
          </SmallInfoDiv>
        </TwoInputDiv>
        <TwoInputDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>방구조</SmallInfoTitle>
            <Dropdown
              options={structures}
              selectedDropdownItem={structure}
              setSelectedDropdownItem={setStructure}
              isEnteredDropdownItem={isEnteredStructure}
            />
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoTitle style={{ marginLeft: "10px" }}>방향</SmallInfoTitle>
            <Dropdown
              options={directions}
              selectedDropdownItem={direction}
              setSelectedDropdownItem={setDirection}
              isEnteredDropdownItem={isEnteredDirection}
            />
          </SmallInfoDiv>
        </TwoInputDiv>
        <TwoInputDiv style={{ marginBottom: "0px" }}>
          <SmallInfoDiv>
            <SmallInfoTitle>관리비</SmallInfoTitle>
            <SmallInput
              isEntered={isEnteredMaintenanceFee}
              handleInputValue={handleMaintenanceFee}
              inputValue={maintenanceFee}
              unit="만원"
            />
          </SmallInfoDiv>
        </TwoInputDiv>

        <FourSmallButtonDiv style={{ marginTop: "17px", marginBottom: "19px" }}>
          <SmallButton
            onClick={handleElectricityButtonClick}
            isClicked={electricity == yesString}
          >
            전기세
          </SmallButton>
          <SmallButton
            onClick={handleGasButtonClick}
            isClicked={gas == yesString}
          >
            가스비
          </SmallButton>
          <SmallButton
            onClick={handleWaterButtonClick}
            isClicked={water == yesString}
          >
            수도세
          </SmallButton>
          <SmallButton
            onClick={handleInternetButtonClick}
            isClicked={internet == yesString}
          >
            인터넷
          </SmallButton>
        </FourSmallButtonDiv>

        <TwoInputDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>면적</SmallInfoTitle>
            <SmallInput
              isEntered={isEnteredArea}
              handleInputValue={handleArea}
              inputValue={area}
              unit="㎡"
            />
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoTitle style={{ marginLeft: "10px" }}>평수</SmallInfoTitle>
            <SmallInput
              isEntered={isEnteredArea}
              handleInputValue={handleArea}
              inputValue={pyeong}
              unit="P"
              disabled={true}
            />
          </SmallInfoDiv>
        </TwoInputDiv>

        <TwoInputDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>건물 층</SmallInfoTitle>
            <SmallInput
              isEntered={isEnteredBuildingFloor}
              handleInputValue={handleBuildingFloor}
              inputValue={buildingFloor}
              unit="층"
            />
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>해당 층</SmallInfoTitle>
            <SmallInput
              isEntered={isEnteredRoomFloor}
              handleInputValue={handleRoomFloor}
              inputValue={roomFloor}
              unit="층"
            />
          </SmallInfoDiv>
        </TwoInputDiv>

        <TwoInputDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>옵션</SmallInfoTitle>
            <Dropdown
              options={options}
              selectedDropdownItem={option}
              setSelectedDropdownItem={setOption}
              isEnteredDropdownItem={isEnteredOption}
            />
          </SmallInfoDiv>
        </TwoInputDiv>
        {option == "있음" && (
          <>
            {" "}
            <FourSmallButtonDiv style={{ marginBottom: "12px" }}>
              <SmallButton
                onClick={handleAirConditionerButtonClick}
                isClicked={airConditioner == yesString}
              >
                에어컨
              </SmallButton>
              <SmallButton
                onClick={handleFridgeButtonClick}
                isClicked={fridge == yesString}
              >
                냉장고
              </SmallButton>
              <SmallButton
                onClick={handleLaundryButtonClick}
                isClicked={laundry == yesString}
              >
                세탁기
              </SmallButton>
              <SmallButton
                onClick={handleInductionButtonClick}
                isClicked={induction == yesString}
              >
                인덕션
              </SmallButton>
            </FourSmallButtonDiv>
            <FourSmallButtonDiv style={{ marginBottom: "12px" }}>
              <SmallButton
                onClick={handleGasStoveButtonClick}
                isClicked={gasStove == yesString}
                style={{ width: "80px" }}
              >
                가스레인지
              </SmallButton>
              <SmallButton
                onClick={handleMicrowaveButtonClick}
                isClicked={microwave == yesString}
                style={{ width: "80px" }}
              >
                전자레인지
              </SmallButton>
              <SmallButton
                onClick={handleDeskButtonClick}
                isClicked={desk == yesString}
                style={{ width: "80px" }}
              >
                책상
              </SmallButton>
            </FourSmallButtonDiv>
            <FourSmallButtonDiv style={{ marginBottom: "5px" }}>
              <SmallButton
                onClick={handleBookshelfButtonClick}
                isClicked={bookshelf == yesString}
              >
                책장
              </SmallButton>
              <SmallButton
                onClick={handleBedButtonClick}
                isClicked={bed == yesString}
              >
                침대
              </SmallButton>
              <SmallButton
                onClick={handleClosetButtonClick}
                isClicked={closet == yesString}
              >
                옷장
              </SmallButton>
              <SmallButton
                onClick={handleSinkButtonClick}
                isClicked={sink == yesString}
              >
                싱크대
              </SmallButton>
            </FourSmallButtonDiv>
          </>
        )}

        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#D7DBDE",
            position: "relative",
            // marginTop: "30px",
          }}
        ></div>

        <TwoInputDiv style={{ marginTop: "20px" }}>
          <SmallInfoDiv>
            <SmallInfoTitle>전세대출</SmallInfoTitle>
            <Dropdown
              options={loans}
              selectedDropdownItem={loan}
              setSelectedDropdownItem={setLoan}
              isEnteredDropdownItem={isEnteredLoan}
              isSmall={true}
            />
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>반려동물</SmallInfoTitle>
            <Dropdown
              options={pets}
              selectedDropdownItem={pet}
              setSelectedDropdownItem={setPet}
              isEnteredDropdownItem={isEnteredPet}
              isSmall={true}
            />
          </SmallInfoDiv>
        </TwoInputDiv>

        <TwoInputDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>주차</SmallInfoTitle>
            <Dropdown
              options={parkings}
              selectedDropdownItem={parking}
              setSelectedDropdownItem={setParking}
              isEnteredDropdownItem={isEnteredParking}
              isSmall={true}
            />
          </SmallInfoDiv>
          <SmallInfoDiv>
            <SmallInfoTitle>엘리베이터</SmallInfoTitle>
            <Dropdown
              options={elevators}
              selectedDropdownItem={elevator}
              setSelectedDropdownItem={setElevator}
              isEnteredDropdownItem={isEnteredElevator}
              isSmall={true}
            />
          </SmallInfoDiv>
        </TwoInputDiv>
        <TwoInputDiv>
          <SmallInfoTitle>입주가능일</SmallInfoTitle>
          <Middleinput
            type="date"
            required={true}
            name="movingInDate"
            onChange={handleInputMovingInDate}
            value={movingInDate}
            isEntered={isEnteredMovingInDates}
            onFocus={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          />
        </TwoInputDiv>
      </InfosWrapper>
      <GoPreviousNextImageWrapper isLong={option == "있음"}>
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

interface IsLongProps {
  isLong: boolean;
}
const RegisterWrapper = styled.div<IsLongProps>`
  position: absolute;
  z-index: 1;

  background-color: white;

  height: ${(props) =>
    props.isLong ? "1120px" : "985px"}; //사진 등록 넣으면 바뀌어야 함 //135차이
  width: 100%;

  top: 192px;

  display: flex;
  justify-content: center;

  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const AlertDiv = styled.div`
  position: absolute;
  z-index: 2;

  background-color: #212429;
  color: white;

  width: 350px;
  height: 58px;

  border-radius: 10px;

  top: 94px;

  display: flex;
  align-items: center;

  & > div {
    position: absolute;
    font-size: 15.61px;
    font-weight: 400;
    left: 54px;
  }
`;

const InfosWrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column; /* 자식 요소들을 세로 방향으로 배치 */

  width: 350px;
  height: 100%;

  top: 188px;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const RegisterImageDiv = styled.div`
  /* width: 300px; 너비를 원하는 크기로 조정 */
  height: 150px; /* 높이를 원하는 크기로 조정 */
  overflow-x: auto; /* 가로 스크롤을 표시하기 위해 overflow-x 속성 사용 */
  white-space: nowrap; /* 내용이 한 줄에 표시되도록 설정 */

  display: flex;
`;

// const Content = styled.div`
//   display: inline-block; /* 내용을 가로로 나열하기 위해 인라인 블록 표시 */
//   width: 150px; /* 각 요소의 너비를 원하는 크기로 조정 */
//   height: 100%; /* 높이를 ScrollableDiv와 맞추기 위해 100%로 설정 */
//   background-color: lightgray;
//   margin-right: 10px; /* 각 요소 사이의 간격을 설정 */
// `;

const TwoInputDiv = styled.div`
  position: relative;

  margin-bottom: 19px;

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
  height: 49px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: 1px solid red;
  box-sizing: border-box; */
`;

const SmallInfoTitle = styled.div`
  position: relative;

  height: 20px;

  font-size: 17px;
  font-weight: 500;

  color: black;

  left: 0px;

  /* border: 1px solid red;
  box-sizing: border-box; */
`;

const SmallInputDiv = styled.div<IsEnteredInterface>`
  //회색 네모동그라미
  position: relative;

  width: 110px;
  height: 49px;

  right: 0px;

  font-size: 17px;
  font-weight: 400;

  display: flex;
  align-items: center;

  padding-left: 15px;

  background-color: ${(props) => (props.isEntered ? "white" : "#F3F3F3")};

  border-radius: 34px;
  border: ${(props) =>
    props.isEntered ? "1px solid #d7dbde" : "none"}; //없애면 안됨
  box-sizing: border-box;
`;

const SmallInputRealInput = styled.input`
  position: absolute;
  width: 61px;
  height: 20px;

  background-color: rgb(1, 1, 1, 0);
  color: black;

  text-align: right;

  font-size: 16px;
  font-weight: 400;

  padding: 0px;

  left: 5px;

  border: none;

  /* border: 1px solid red;
  box-sizing: border-box; */
`;

const SmallInputUnit = styled.div<IsEnteredInterface>`
  position: absolute;
  height: 20px;

  font-size: 16px;
  font-weight: 400;

  color: ${(props) => (props.isEntered ? "black" : "#B3B3B3")};
  background-color: rgb(1, 1, 1, 0);

  right: 6px;

  display: flex;
  align-items: center;

  /* border: 1px solid red;
  box-sizing: border-box; */
`;

interface SmallInputProps {
  isEntered: boolean;
  handleInputValue: any;
  inputValue: any;
  unit: string;
  disabled?: boolean;
}

const SmallInput = ({
  isEntered,
  handleInputValue,
  inputValue,
  unit,
  disabled,
}: SmallInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // div가 클릭되었을 때 input을 클릭하기 위해 focus() 메서드를 사용
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <SmallInputDiv onClick={handleClick} isEntered={isEntered}>
      <SmallInputRealInput
        ref={inputRef}
        type="number"
        required={true}
        name="value"
        onChange={handleInputValue}
        value={inputValue}
        min={0}
        disabled={disabled}
      />
      <SmallInputUnit isEntered={isEntered}>{unit}</SmallInputUnit>
    </SmallInputDiv>
  );
};

const FourSmallButtonDiv = styled.div`
  position: relative;

  margin-left: 60px;

  height: 33px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const SmallButton = styled.div<IsClickedProps>`
  width: 65px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  font-weight: 400;

  background-color: ${(props) => (props.isClicked ? "black" : "white")};
  color: ${(props) => (props.isClicked ? "#BFFA00" : "black")};

  border: 1px solid #b3b3b3; //없애면 안됨
  border-radius: 20px;
  box-sizing: border-box;
`;

const Middleinput = styled.input<IsEnteredInterface>`
  width: 270px;
  height: 49px;

  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: 400;

  padding-left: 25px;
  padding-right: 25px;

  background-color: ${(props) => (props.isEntered ? "white" : "#F3F3F3")};

  border-radius: 41px;
  border: ${(props) => (props.isEntered ? "1px solid #d7dbde" : "none")};
  box-sizing: border-box;
`;

///GoPreviousNextButton
const GoPreviousNextImageWrapper = styled.div<IsLongProps>`
  position: absolute;
  width: 350px;
  height: 56px;

  display: flex;
  justify-content: space-between;

  top: ${(props) =>
    props.isLong
      ? "1225px"
      : "1095px"}; //사진 넣으면 바뀌어야 함 // //130차이 남

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
