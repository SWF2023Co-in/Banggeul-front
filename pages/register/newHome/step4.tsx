import NewHomeTop from "@/components/register/NewHomeTop";
import styled from "styled-components";

import {
  StepsContainer,
  RegisterTitle,
  GrayColorFont,
  InfoDiv,
  InfoTitle,
  IsEnteredInterface,
} from "@/components/register/steps";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

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

  const [tagAmount, setTagAmout] = useState<number>(0);
  function handleAddTag() {
    setTagAmout(tagAmount + 1);
    if (tag != undefined) {
      setTagList([...tagList, tag]);
    }
    console.log(tagList);
    setTag(undefined);
  }

  const [message, setMessage] = useState<string | undefined>(undefined); //메시지
  const handleMessage = (e: any) => {
    setMessage(e.target.value);
    console.log(message);
  };
  const [isEnteredMessage, setIsEnteredMessage] = useState(false);

  const [tagList, setTagList] = useState<string[]>([]); //태그리스트

  const [tag, setTag] = useState<string | undefined>(undefined); //태그
  const handleTag = (e: any) => {
    setTag(e.target.value);
  };
  // const [isEnteredTag, setIsEnteredTag] = useState(false);

  useEffect(() => {
    //입력창에 입력되면 회색창이 사라지게 하기 위해
    if (message !== undefined) {
      setIsEnteredMessage(true);
    }
  }, [message]);
  const messagePlaceholder = `방의 특징과 소개, 추가로 남기고 싶은 말을 자유롭게\n적어주세요!`;

  const AddTagButton = () => {
    return (
      <img
        src="/img/register/newHome/step4/addTag.svg"
        alt="addTag"
        width={29}
        height={29}
        onClick={handleAddTag}
      />
    );
  };

  return (
    <RegisterWrapper>
      <RegisterTitle>
        <GrayColorFont>Step 4 </GrayColorFont>상세정보 남기기
      </RegisterTitle>
      <InfosWrapper>
        <InfoDiv>
          <InfoTitle>남길 메시지</InfoTitle>
          <MessageInput
            isEntered={isEnteredMessage}
            onChange={handleMessage}
            placeholder={`방의 특징과 소개, 추가로 남기고 싶은 말을 자유롭게\n적어주세요!`}
            required={true}
            name="addressDetail"
            value={message}
            // onFocus={() => {
            //   window.scrollTo(0, document.body.scrollHeight);
            // }}
          ></MessageInput>
        </InfoDiv>
        <InfoDiv>
          <InfoTitle>해시태그 추가하기</InfoTitle>
          {tagAmount == 0 && <AddTagButton />}
          {tagAmount == 1 && (
            <SmallInfoDiv>
              <SmallInput
                isEntered={true}
                handleInputValue={handleTag}
                inputValue={tag}
              />
              <AddTagButton />
            </SmallInfoDiv>
          )}
          {tagAmount == 2 && (
            <SmallInfoDiv style={{ width: "270px" }}>
              <SmallInput
                isEntered={true}
                handleInputValue={handleTag}
                inputValue={tagList[0]}
              />
              <SmallInput
                isEntered={true}
                handleInputValue={handleTag}
                inputValue={tag}
              />
              <AddTagButton />
            </SmallInfoDiv>
          )}
          {tagAmount == 3 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <SmallInput
                isEntered={true}
                handleInputValue={handleTag}
                inputValue={tagList[0]}
              />
              <SmallInput
                isEntered={true}
                handleInputValue={handleTag}
                inputValue={tagList[1]}
              />
              <SmallInput
                isEntered={true}
                handleInputValue={handleTag}
                inputValue={tag}
              />
            </div>
          )}
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

const MessageInput = styled.textarea<IsEnteredInterface>`
  width: 100%;
  height: 160px;

  font-size: 15px;
  font-weight: 400;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;

  color: ${(props) => (props.isEntered ? "black" : "#B3B3B3")};
  background-color: ${(props) => (props.isEntered ? "white" : "#F3F3F3")};

  letter-spacing: -2px;
  line-height: 22px;

  border-radius: 41px;
  border: ${(props) => (props.isEntered ? "1px solid #d7dbde" : "none")};
  box-sizing: border-box;
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

interface SmallInputProps {
  isEntered: boolean;
  handleInputValue: any;
  inputValue: any;
  disabled?: boolean;
}

const SmallInput = ({
  isEntered,
  handleInputValue,
  inputValue,
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
        type="text"
        required={true}
        name="addressDetail"
        onChange={handleInputValue}
        value={inputValue}
        disabled={disabled}
      />
    </SmallInputDiv>
  );
};

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
