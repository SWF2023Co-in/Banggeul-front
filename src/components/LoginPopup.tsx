import styled from "styled-components";
import React from "react";
import NextImage from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import KakaoLogin from "./KakaoLogin";
import { isOpenLoginPopupState } from "@/lib/states";

const LoginPopup = () => {
  const [isOpenLoginPopup, setIsOpenLoginPopup] = useRecoilState(
    isOpenLoginPopupState
  );
  return (
    <PopupDiv>
      <div
        style={{
          position: "absolute",
          top: "18px",
          right: "20px",
          fontSize: "20px",
          color: "#797979",
        }}
        onClick={() => {
          setIsOpenLoginPopup(false);
        }}
      >
        x
      </div>
      <PopupContent>
        <PopupImage
          src="/img/src/popup/loginNWalletPopup.svg"
          alt="loginNWalletPopup"
        />
        <PopupDetail>로그인을 진행해주세요.</PopupDetail>
        <KakaoLogin />
        <OtherLoginButton>다른 방법으로 로그인</OtherLoginButton>
        <LostAccountDiv>혹시, 계정을 잊어버리셨나요?</LostAccountDiv>
      </PopupContent>
    </PopupDiv>
  );
};

export default LoginPopup;

const PopupDiv = styled.div`
  z-index: 200;
  position: fixed;
  bottom: 21px;
  width: 350px;
  border-radius: 20px;

  background-color: white;

  display: flex;
  justify-content: center;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 42px;
  padding-bottom: 42px;
`;

const PopupImage = styled.img`
  width: 28px;
  height: 28px;
  margin-bottom: 14px;
`;

const PopupDetail = styled.div`
  height: 32px;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 25px;
`;

const OtherLoginButton = styled.div`
  width: 300px;
  height: 45px;

  background-color: white;
  color: black;

  border: 1px solid #b3b3b3;
  border-radius: 6px;

  margin-bottom: 7px;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  font-weight: 500;
`;

const LostAccountDiv = styled.div`
  height: 32px;
  font-size: 12px;
  font-weight: 400;

  text-decoration: underline;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  color: #797979;
`;
