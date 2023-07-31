import styled from "styled-components";
import React from "react";
import NextImage from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import { selectedNavigationBarButtonState } from "@/lib/states";

const NavigationBar = () => {
  const router = useRouter();

  /**
   * home이 눌렸을 땐(false), mypage가 눌렸을 땐(true)
   * */
  let [selectedNavigationBarButton, setSelectedNavigationBarButton] =
    useRecoilState<boolean>(selectedNavigationBarButtonState);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  function handleHomeButtonClick() {
    setSelectedNavigationBarButton(false);
    router.push("/");
  }
  function handleMyPageButtonClick() {
    setSelectedNavigationBarButton(true);
    router.push("/mypage");
  }
  function handlePlusButtonClick() {
    router.push("/register/newHome/step1");
  }
  useEffect(() => {
    const handleScroll = () => {
      // 페이지의 스크롤 위치가 0이 아니면 스크롤이 되었다고 판단
      setIsScrolled(window.scrollY !== 0);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 마운트 해제되면 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationBarWrapper isScrolled={isScrolled}>
      <PlusButtonImage
        src="/img/src/navigationBar/plusButton.svg"
        alt="plusButton"
        height={34}
        width={34}
        onClick={handlePlusButtonClick}
      />
      <HomeButtonImage
        src={
          selectedNavigationBarButton
            ? "/img/src/navigationBar/homeBeforeClicked.svg"
            : "/img/src/navigationBar/homeAfterClicked.svg"
        }
        alt="homeBeforeClicked"
        width={25}
        height={27}
        onClick={handleHomeButtonClick}
      />
      <MyPageButtonImage
        src={
          selectedNavigationBarButton
            ? "/img/src/navigationBar/myPageAfterClicked.svg"
            : "/img/src/navigationBar/myPageBeforeClicked.svg"
        }
        alt="myPageBeforeClicked"
        width={38}
        height={26}
        onClick={handleMyPageButtonClick}
      />
    </NavigationBarWrapper>
  );
};

export default NavigationBar;

interface NavigationBarWrapperProps {
  isScrolled: boolean;
}

const NavigationBarWrapper = styled.div<NavigationBarWrapperProps>`
  position: fixed;
  z-index: 100;

  bottom: 0px;

  height: 89px;
  width: 100%;

  bottom: ${(props) =>
    props.isScrolled
      ? "0px"
      : "-30px"}; //스크롤바를 내리기 전에는 스크롤바 하단의 여백이 안 보이게

  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */

  background-color: white;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
`;

const PlusButtonImage = styled(NextImage)`
  position: absolute;
  z-index: 101;
  top: 21px;
`;

const HomeButtonImage = styled(NextImage)`
  position: absolute;
  z-index: 101;
  top: 25px;
  left: 75px;
`;

const MyPageButtonImage = styled(NextImage)`
  position: absolute;
  z-index: 101;
  top: 26px;
  right: 71px;
`;
