// Home
import styled from "styled-components";
import React from "react";
import NextImage from "next/image";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HomeInfoImage } from "@/img";
import { GlassButtonHome } from "@/components/GlassButton";
import { useRouter } from "next/router";
import { atom, RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  selectedSortByState,
  selectedHomeTypeState,
  homeAmountState,
} from "@/lib/states";
import { MaskGroupGif } from "@/img";

const Home = (): JSX.Element => {
  const [selectedHomeType, setSelectedHomeType] = useRecoilState(
    selectedHomeTypeState
  );

  const [selectedSortingButton, setSelectedSortingButton] =
    useRecoilState(selectedSortByState);

  useEffect(() => {
    //홈페이지 로딩될 때마다 초기화 되어야 할 것들
    setSelectedHomeType("none");
    setSelectedSortingButton("recent");
  }, []);
  return <HomePage></HomePage>;
};

export default Home;

export const HomePage = (): JSX.Element => {
  const router = useRouter();

  const [selectedHomeType, setSelectedHomeType] = useRecoilState(
    selectedHomeTypeState
  );

  const [selectedSortingButton, setSelectedSortingButton] =
    useRecoilState(selectedSortByState);

  const handleSortingButtonClick = (sortBy: string) => {
    setSelectedSortingButton(sortBy);
  };

  const handleHomeTypeButtonClick = (homeType: string) => {
    setSelectedHomeType(homeType);
  };

  const homeAmount = useRecoilValue(homeAmountState);

  return (
    <Container>
      <MaskGroupWrapper>
        <MaskGroupGif
          gifUrl="/img/home/maskGroup1.gif"
          imageUrl="/img/home/maskGroup1.png"
        />
        {/* <BanggeulLogoBlackCircleImage
          alt="banggeulLogoBlack"
          src="/img/home/banggeulLogoBlackCircle.png"
          width={49}
          height={49}
        /> */}
        <BellImage
          alt="bell"
          src="/img/home/bell.png"
          width={18.57}
          height={19.83}
        />
        <ServiceIntroDiv>
          <ServiceIntroParagraph
            style={{ color: "#BFFA00", fontWeight: "bold" }}
          >
            전⋅월세 사기 위험,
          </ServiceIntroParagraph>
          <ServiceIntroParagraph>방글이</ServiceIntroParagraph>
          <ServiceIntroParagraph>지켜드릴게요</ServiceIntroParagraph>
        </ServiceIntroDiv>
        <HomeTypeDiv>
          <HomeTypeButtonWrapper>
            <GlassButtonHome
              imgSrc="/img/home/flat.svg"
              clickedImgSrc="/img/home/clickedFlat.svg"
              onClick={() => {
                handleHomeTypeButtonClick("flat");
                const url = `/flat/recent`;
                router.push(url, undefined, { shallow: true });
              }}
              isClicked={"flat" == selectedHomeType}
            />
            <p>아파트</p>
          </HomeTypeButtonWrapper>
          <HomeTypeButtonWrapper>
            <GlassButtonHome
              imgSrc="/img/home/officetel.svg"
              clickedImgSrc="/img/home/clickedOfficetel.svg"
              onClick={() => {
                handleHomeTypeButtonClick("officetel");
                const url = `/officetel/recent`;
                router.push(url, undefined, { shallow: true });
              }}
              isClicked={"officetel" == selectedHomeType}
            />
            <p>오피스텔</p>
          </HomeTypeButtonWrapper>
          <HomeTypeButtonWrapper>
            <GlassButtonHome
              imgSrc="/img/home/villa.svg"
              clickedImgSrc="/img/home/clickedVilla.svg"
              onClick={() => {
                handleHomeTypeButtonClick("villa");
                const url = `/villa/recent`;
                router.push(url, undefined, { shallow: true });
              }}
              isClicked={"villa" == selectedHomeType}
            />
            <p>빌라</p>
          </HomeTypeButtonWrapper>
          <HomeTypeButtonWrapper>
            <GlassButtonHome
              imgSrc="/img/home/oneRoom.svg"
              clickedImgSrc="/img/home/clickedOneRoom.svg"
              onClick={() => {
                handleHomeTypeButtonClick("oneRoom");
                const url = `/oneRoom/recent`;
                router.push(url, undefined, { shallow: true });
              }}
              isClicked={"oneRoom" == selectedHomeType}
            />
            <p>원룸</p>
          </HomeTypeButtonWrapper>
        </HomeTypeDiv>
      </MaskGroupWrapper>

      <HomesGroupWrapper homeAmount={homeAmount}>
        <SortingButtonDiv>
          <SortingButton
            onClick={() => {
              handleSortingButtonClick("recent");
              const url = `/none/recent`;
              router.push(url, undefined, { shallow: true });
            }}
            isClicked={"recent" == selectedSortingButton}
          >
            최신순
          </SortingButton>
          <SortingButton
            onClick={() => {
              handleSortingButtonClick("price");
              const url = `/none/price`;
              router.push(url, undefined, { shallow: true });
            }}
            isClicked={"price" == selectedSortingButton}
          >
            가격순
          </SortingButton>
          <SortingButton
            onClick={() => {
              handleSortingButtonClick("area");
              const url = `/none/area`;
              router.push(url, undefined, { shallow: true });
            }}
            isClicked={"area" == selectedSortingButton}
          >
            면적순
          </SortingButton>
          <SortingButton>
            필터
            <img
              src="/img/home/filter.svg"
              alt="필터"
              style={{ marginLeft: "2px" }}
            ></img>
          </SortingButton>
        </SortingButtonDiv>
        <TellingHomeAmountDiv>
          <strong>{homeAmount}</strong>개의 방이 있습니다.
        </TellingHomeAmountDiv>
        <HomesGroupDiv>
          <HomeInfo />
          <HomeInfo />
          <HomeInfo />
        </HomesGroupDiv>
      </HomesGroupWrapper>
    </Container>
  );
};

export const HomeInfo = () => {
  //매물 이미지는 140,105px
  //매물 하나하나.
  return (
    <HomeDiv>
      <HomeInfoImage imageUrl="/img/home/homeEx2.jpeg" />
      <TagDiv>
        <Tag firstTag={true}>#풀옵션</Tag>
        <Tag>#역세권</Tag>
        <Tag>#여성전용</Tag>
      </TagDiv>
      <SellTypeAndPriceDiv>전세 1억 1,000</SellTypeAndPriceDiv>
      <AreaAndRoomFloorWrapper>
        <AreaDiv>21.14㎡</AreaDiv>
        <RoomFloorDiv>2층</RoomFloorDiv>
      </AreaAndRoomFloorWrapper>
      <AbstractAddressDiv>용산구 청파동</AbstractAddressDiv>
    </HomeDiv>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const MaskGroupWrapper = styled.div`
  background-color: #000000;
  height: 549px;
  position: relative;
  top: 0 px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BanggeulLogoBlackCircleImage = styled(NextImage)`
  position: absolute;
  z-index: 1;
  top: 1px;
`;

export const BellImage = styled(NextImage)`
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 20.43px;
`;

const ServiceIntroDiv = styled.div`
  position: absolute;
  z-index: 1;

  left: 34px;
  top: 98px;

  border: 0px none;
  height: 141px;
  width: 220px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ServiceIntroParagraph = styled.p`
  align-self: stretch;
  font-family: "Pretendard";
  font-size: 33px;
  font-weight: 350;
  letter-spacing: -2px;
  color: white;
  line-height: 12px;

  margin-bottom: 12px;
  margin-top: 12px;
`;

const HomeTypeDiv = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  justify-content: space-between;

  width: 322px; //
  height: 78px;

  top: 286px;

  margin: 0px;
`;

export const HomeTypeButtonWrapper = styled.div`
  width: 52px;
  height: 100%;
  flex-direction: row;
  justify-content: center;

  & > p {
    //아파트, 빌라, 등등 글자 들어갈 곳
    text-align: center;
    color: white;
    font-size: 13px;
    font-weight: 400;
    margin-top: 6px;
    margin-bottom: 0;
  }
`;

const HomeTypeImageWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 0px none;
  height: 52px;
  width: 52px;
`;

const HomeTypeImage = styled(NextImage)`
  height: 52px;
  position: absolute;
`;

//HomesGroup

interface HomeGroupWrapperProps {
  homeAmount: number;
}
const HomesGroupWrapper = styled.div<HomeGroupWrapperProps>`
  position: absolute;
  z-index: 1;

  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  height: ${(props) => `${250 + props.homeAmount * 142}px`};

  width: 100%;

  top: 399px;

  display: flex;
  justify-content: center;
`;

const SortingButtonDiv = styled.div`
  position: absolute;
  z-index: 2;

  width: 350px;
  height: 31px;

  top: 30px;

  justify-content: space-between;
  display: flex;
`;

interface ButtonProps {
  isClicked?: boolean;
}

export const SortingButton = styled.button<ButtonProps>`
  width: 76px;
  height: 31px;
  border-radius: 24px;

  background-color: ${(props) => (props.isClicked ? "#3E3E3E" : "white")};
  color: ${(props) => (props.isClicked ? "#BFFA00" : "#595959")};
  font-weight: ${(props) => (props.isClicked ? 500 : 300)};

  border: ${(props) => (props.isClicked ? "none" : "0.8px solid #e4e4e4")};
  box-sizing: border-box;

  text-align: center;

  font-size: 14.5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TellingHomeAmountDiv = styled.div`
  position: absolute;
  z-index: 2;

  width: 350px;
  height: 19px;

  font-size: 16px;
  font-weight: 300;

  top: 99px;
`;

const HomesGroupDiv = styled.div`
  //여러개의 매물들 전체를 감싸는 Div
  position: absolute;
  z-index: 3;

  width: 350px;
  height: auto;
  /* height: 200px; */

  top: 137px;

  /* border: 1px solid red; */
`;

const HomeDiv = styled.div`
  //매물 전체 감싸는 div
  position: relative;
  width: 350px;
  height: 120px; //
  margin-bottom: 22px;

  border-bottom: 1px solid #e2e2e2;
`;

const TagDiv = styled.div`
  position: absolute;
  width: 160px;
  height: 17px;

  left: 160px;
  top: 0px;

  display: flex;

  /* border: 1px solid green; */
`;

interface TagProps {
  firstTag?: boolean;
}

const Tag = styled.div<TagProps>`
  position: relative;
  width: 50px;
  height: 17px;
  background-color: #f3f3f3;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 10px;
  font-weight: 400;

  margin-left: ${(props) => (props.firstTag ? "0px" : "5px")};
  border-radius: 35px;
`;

const SellTypeAndPriceDiv = styled.div`
  //전월세 & 가격
  position: absolute;

  width: auto;
  height: 30px;
  left: 160px;
  top: 21px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 800;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const AreaAndRoomFloorWrapper = styled.div`
  //면적 & 층수 포함하는 전체 Div
  position: absolute;

  width: auto;
  height: 23px;
  left: 160px;
  top: 50px;

  font-size: 15px;
  font-weight: 300;

  display: flex;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const AreaDiv = styled.div`
  //면적 & 층수 포함하는 전체 Div
  position: relative;

  width: auto;
  height: 23px;

  /* border: 1px solid yellow;
  box-sizing: border-box; */
`;

const RoomFloorDiv = styled.div`
  //면적 & 층수 포함하는 전체 Div
  position: relative;

  width: auto;
  height: 23px;

  margin-left: 10px;

  /* border: 1px solid yellow;
  box-sizing: border-box; */
`;

const AbstractAddressDiv = styled.div`
  //00구 00동
  position: absolute;

  width: auto;
  height: 23px;
  left: 160px;
  top: 72px;

  font-size: 15px;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;
