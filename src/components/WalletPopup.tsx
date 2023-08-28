import styled from "styled-components";
import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import { isOpenWalletPopupState } from "@/lib/states";

import Ethereum from "./Ethereum.png";
import { ethers } from "ethers";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
  WagmiConfig,
  Connector,
} from "wagmi";

const WalletPopup = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [defaultAccount, setDefaultAccount] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<string | null>(null);
  const connectwalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      provider
        .send("eth_requestAccounts", [])
        .then(async (accounts: string[]) => {
          await accountChangedHandler(provider.getSigner(), accounts[0]);
        });
    } else {
      setErrorMessage("Please Install MetaMask!!!");
    }
  };

  // const accountChangedHandler = async (newAccount) => {
  //   const address = await newAccount.getAddress();
  //   setDefaultAccount(address);
  //   const balance = await newAccount.getBalance();
  //   setUserBalance(ethers.utils.formatEther(balance));
  //   await getuserBalance(address);
  // };
  // const getuserBalance = async (address) => {
  //   const balance = await provider.getBalance(address, "latest");
  // };
  const accountChangedHandler = async (
    newAccount: ethers.Signer,
    address: string
  ) => {
    setDefaultAccount(address);
    const balance = await newAccount.getBalance();
    setUserBalance(ethers.utils.formatEther(balance));
    await getuserBalance(address);
  };

  const getuserBalance = async (address: string) => {
    const balance = await provider.getBalance(address, "latest");
    // Do something with balance...
  };

  const [isAgreeWallet, setIsAgreeWallet] = useState(false);
  function handleAgreeButton() {
    setIsAgreeWallet(true);
  }
  const [isOpenWalletPopup, setIsOpenWalletPopup] = useRecoilState(
    isOpenWalletPopupState
  );
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <PopupDiv>
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "20px",
          color: "#797979",
        }}
        onClick={() => setIsOpenWalletPopup(false)}
      >
        X
      </div>
      <PopupContent>
        {isAgreeWallet ? (
          <>
            <PopupImage
              src="/img/src/popup/loginNWalletPopup.svg"
              alt="loginNWalletPopup"
            />
            <PopupDetail>불러올 지갑을 선택해주세요.</PopupDetail>
            {/* <WhiteButton
              style={{ marginBottom: "5px" }}
              key={connectors[0].id}
              onClick={() => {
                connectors[0];
              }}
            > */}
            <WhiteButton
              onClick={connectwalletHandler}
              style={{ marginBottom: "5px" }}
            >
              <img
                src="/img/src/popup/metamask.svg"
                style={{ marginRight: "5px" }}
              />
              METAMASK
            </WhiteButton>
            <WhiteButton style={{ marginBottom: "5px" }}>
              <img
                src="/img/src/popup/rabbitWallet.svg"
                style={{ marginRight: "5px" }}
              />
              RABBY WALLET
            </WhiteButton>
            <WhiteButton>
              <img
                src="/img/src/popup/xdefi.svg"
                style={{ marginRight: "5px" }}
              />
              XDEFI
            </WhiteButton>
          </>
        ) : (
          <>
            <PopupImage
              src="/img/src/popup/agreeWalletPopup.svg"
              alt="agreeWalletPopup"
            />
            <PopupDetail style={{ fontSize: "16px" }}>
              암호화폐 지갑 정보를 불러오도록 허용하시겠습니까?
            </PopupDetail>
            <BlackImageWrapper style={{ marginBottom: "5px" }}>
              <BlackImageDiv onClick={handleAgreeButton}>
                <Image
                  src="/img/src/popup/blackButton.png"
                  alt="AgreeButton"
                  width={300}
                  height={45}
                />
                <BlackMessage>허용</BlackMessage>
              </BlackImageDiv>
            </BlackImageWrapper>
            <WhiteButton onClick={() => setIsOpenWalletPopup(false)}>
              허용 안함
            </WhiteButton>
          </>
        )}
      </PopupContent>
    </PopupDiv>
  );
};

export default WalletPopup;

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

const WhiteButton = styled.div`
  width: 300px;
  height: 45px;

  background-color: white;
  color: black;

  border: 1px solid #b3b3b3;
  box-sizing: border-box;
  border-radius: 10px;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
`;

//AgreeButton
const BlackImageWrapper = styled.div`
  width: 300px;
  height: 45px;

  display: flex;
  justify-content: flex-end;

  top: 655px;
  /* margin-top: 30px; */

  margin-bottom: 20px;
  /* border: 1px solid purple;
  box-sizing: border-box; */
`;

const BlackImageDiv = styled.div`
  position: relative;
`;

const BlackMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 16px;
  font-weight: 500;
  color: #bffa00;
`;
