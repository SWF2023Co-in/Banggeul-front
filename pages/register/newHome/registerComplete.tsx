import { styled } from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import {
  registerHomeUpLoadFileState,
  registerHomeWholeInfoState,
} from "@/lib/states";

const RegisterComplete = () => {
  const router = useRouter();
  const handleGoCompleteButtonClick = () => {
    router.replace("/");
  };
  const uploadFile: object | null | string = useRecoilValue(
    registerHomeUpLoadFileState
  );
  const registerHomeWholeInfo = useRecoilValue(registerHomeWholeInfoState);
  console.log(uploadFile);

  useEffect(() => {
    handleUpload();
  }, []); // 페이지 로드 시 한 번만 업로드하도록 설정

  const handleUpload = async () => {
    if (uploadFile === null) {
      console.error("uploadFile is null");
      return;
    }

    const jsonRegisterHomeWholeInfo = JSON.stringify(registerHomeWholeInfo);
    const blobRegisterHomeWholeInfo = new Blob([jsonRegisterHomeWholeInfo], {
      type: "application/json",
    });

    const formData = new FormData();
    // formData.append("files", uploadFile);
    if (uploadFile instanceof File) {
      formData.append("files", uploadFile);
    } else if (uploadFile instanceof Blob) {
      formData.append("files", uploadFile);
    } else {
      console.error("Unsupported type for uploadFile");
      return;
    }
    formData.append("request", blobRegisterHomeWholeInfo);
    console.log(formData.get("files"));
    console.log(formData.get("request"));

    // const params = new URL(document.location.toString()).searchParams;
    // const code = params.get("code");

    // const response = await axios.get(
    //   `https://banggeul.store/login/kakao?code=${code}`
    // );

    // const access_token = response.data.response["accessToken"];
    // console.log(access_token);
    const access_token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJLQUtBTzI5MzYxMTk1MjciLCJyb2xlIjoiVVNFUiIsImV4cCI6MTY5MzUzMjE3MH0.2zF-VJ5nlrQP9uZyjCZ5-Y2rwfn0HiYMIWb47TrkMCc";
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

    try {
      const uploadResponse = await axios({
        method: "post",
        url: "https://banggeul.store/properties",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(uploadResponse); // 업로드 응답 확인
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StepsContainer>
      <RegisterHomeCompleteGif />
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
  position: absolute;
  text-align: center;

  font-size: 25px;
  font-weight: 700;

  color: black;

  top: 275px;

  /* border: 1px solid red; */
`;

const RegisteredHomeInfoDiv = styled.div`
  position: absolute;
  width: 284px;

  top: 360px;

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
  position: absolute;
  width: 350px;
  height: 60px;

  top: 590px;

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

const RegisterHomeCompleteGif: React.FC = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // 3초 후에 GIF를 멈추도록 처리
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 2200); // 3초

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <img
        src="/img/register/newHome/registerComplete/registerHomeComplete.png"
        alt="registerHomeCompletePng"
        width={162}
        height={154}
        style={{ top: "110px", position: "absolute" }}
      />
      {showGif && (
        <img
          src="/img/register/newHome/registerComplete/registerHomeComplete.gif"
          alt="registerHomeCompleteGif"
          width={162}
          height={154}
          style={{ top: "110px", position: "absolute" }}
        />
      )}
    </>
  );
};

{
  /* <>
    {showGif ? (
      <img
        src="/img/register/newHome/registerComplete/registerHomeComplete.gif"
        alt="registerHomeCompleteGif"
        width={162}
        height={154}
        style={{ marginTop: "110px" }}
      />
    ) : (
      <img
        src="/img/register/newHome/registerComplete/registerHomeComplete.png"
        alt="registerHomeCompletePng"
        width={162}
        height={154}
        style={{ marginTop: "110px" }}
      />
    )}
    </> */
}
