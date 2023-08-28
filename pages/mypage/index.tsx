import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import NextImage from "next/image";
import Image from "next/image";
import KakaoLogin from "@/components/KakaoLogin";
import { isOpenWalletPopupState, isOpenLoginPopupState } from "@/lib/states";

import { InfoTitle } from "@/components/register/steps";
import { useRecoilState, useRecoilValue } from "recoil";
import WalletPopup from "@/components/WalletPopup";
import LoginPopup from "@/components/LoginPopup";

const Mypage = (): JSX.Element => {
  const [isOpenWalletPopup, setIsOpenWalletPopup] = useRecoilState(
    isOpenWalletPopupState
  );
  const [isOpenLoginPopup, setIsOpenLoginPopup] = useRecoilState(
    isOpenLoginPopupState
  );

  useEffect(() => {
    setIsOpenLoginPopup(false);
    setIsOpenWalletPopup(false);
  }, []);

  return (
    <Container>
      <BellSettingDiv>
        <img src="/img/mypage/bellMypage.svg" alt="bellMypage" />
        <img src="/img/mypage/settingMyPage.svg" alt="settingMyPage" />
      </BellSettingDiv>
      <LoginDiv onClick={() => setIsOpenLoginPopup(true)}>
        <div>
          <div>로그인 하세요</div>
          <img
            src="/img/mypage/toRight.svg"
            alt="toRight"
            width={5.32}
            height={10.12}
          />
        </div>
        <img
          src="/img/mypage/profile.svg"
          alt="profile"
          width={50.72}
          height={56.02}
        />
      </LoginDiv>
      <WalletImage
        src="/img/mypage/walletBeforeConnect.svg"
        alt="walletBeforeConnect"
        onClick={() => setIsOpenWalletPopup(true)}
      />
      <UserConvenienceWrapper>
        <UserConvenienceDiv>
          <img
            src="/img/mypage/recentWatchBeforeLogin.svg"
            alt="recentWatchBeforeLogin"
          />
          <div>최근 본 매물</div>
        </UserConvenienceDiv>
        <UserConvenienceDiv>
          <img
            src="/img/mypage/interestBeforeLogin.svg"
            alt="interestBeforeLogin"
          />
          <div>관심 설정</div>
        </UserConvenienceDiv>
        <UserConvenienceDiv>
          <img
            src="/img/mypage/messageOnProcessBeforeLogin.svg"
            alt="messageOnProcessBeforeLogin"
          />
          <div>진행중인 메시지</div>
        </UserConvenienceDiv>
      </UserConvenienceWrapper>
      <InfoDiv style={{ marginTop: "30px" }}>
        <InfoTitle>서류 등록하기</InfoTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SquareBlock
            isSatisfied={true}
            imgSrc="/img/mypage/idCardMyPageBeforeRegister.svg"
            satisfiedImgSrc="/img/mypage/idCardMyPageAfterRegister.svg"
            name="신분증"
          />
          <SquareBlock
            isSatisfied={true}
            imgSrc="/img/mypage/joominDeungMyPageBeforeRegister.svg"
            satisfiedImgSrc="/img/mypage/joominDeungMyPageAfterRegister.svg"
            name="주민등록등본"
          />
        </div>
      </InfoDiv>

      {isOpenLoginPopup && (
        <Container
          style={{
            backgroundColor: "rgb(0,0,0,0.4)",
            zIndex: "198",
            position: "fixed",
            bottom: "0px",
          }}
        >
          <LoginPopup />
        </Container>
      )}
      {isOpenWalletPopup && (
        <Container
          style={{
            backgroundColor: "rgb(0,0,0,0.4)",
            zIndex: "198",
            position: "fixed",
            bottom: "0px",
          }}
        >
          <WalletPopup />
        </Container>
      )}
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  width: 100%;
  height: 870px;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const BellSettingDiv = styled.div`
  position: absolute;
  width: 50.6px;
  height: 21.6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  & > img {
    height: 21.6px;
    width: 21.6px;
  }
  top: 14.4px;
  right: 20px;
`;

const LoginDiv = styled.div`
  margin-top: 62px;

  width: 350px;
  height: 56.02px;

  display: flex;
  justify-content: space-between;

  & > div {
    width: 125.32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 20px;
    font-weight: 500;
  }

  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const WalletImage = styled.img`
  margin-top: 18px;
  width: 350px;
  height: 362px;
`;

const UserConvenienceWrapper = styled.div`
  //최근 본 매물, 관심설정, 진행중인 메시지
  width: 330px;
  height: 73px;

  margin-top: 10px;

  display: flex;
  justify-content: space-between;

  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const UserConvenienceDiv = styled.div`
  width: 33.3%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid purple;
  box-sizing: border-box; */

  color: #d3d3d3;
  & > div {
    margin-top: 5px;
  }

  & > img {
    width: 30px;
    height: 30px;
  }
`;

const InfoDiv = styled.div`
  position: relative;

  width: 350px;
  margin-bottom: 23px;

  display: flex;
  flex-direction: column; /* 자식 요소들을 세로 방향으로 배치 */
`;

interface SquareBlockProps {
  isSatisfied: boolean;
  imgSrc: string;
  satisfiedImgSrc: string;
  name: string;
}

const SquareBlock = ({
  isSatisfied,
  imgSrc,
  satisfiedImgSrc,
  name,
}: SquareBlockProps) => {
  return (
    <SquareDiv isSatisfied={isSatisfied}>
      <div
        style={
          {
            //   border: "1px solid red",
          }
        }
      >
        <div
          style={{
            // border: "1px solid red",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {isSatisfied ? (
            <img
              src={satisfiedImgSrc}
              alt="satisfiedImage"
              height={36}
              width={36}
            />
          ) : (
            <img src={imgSrc} alt="Image" height={36} width={36} />
          )}
        </div>
        <SquareTitle isSatisfied={isSatisfied}>{name}</SquareTitle>
      </div>
    </SquareDiv>
  );
};

interface IsSatisfiedProps {
  isSatisfied?: boolean;
}

export const SquareDiv = styled.div<IsSatisfiedProps>`
  width: 49%;
  height: 110px;

  background-color: ${(props) => (props.isSatisfied ? "white" : "#F3F3F3")};

  display: flex;
  justify-content: center;
  align-items: center;

  border: ${(props) => (props.isSatisfied ? "1px solid #D7DBDE" : "none")};
  border-radius: 10px;
  box-sizing: border-box;
`;

const SquareTitle = styled.div<IsSatisfiedProps>`
  color: ${(props) => (props.isSatisfied ? "black" : "#B3B3B3")};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: 400;

  margin-top: 8px;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;
