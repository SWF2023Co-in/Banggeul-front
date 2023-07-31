import { useRouter } from "next/router";
import { HomePage } from "..";
import styled from "styled-components";
import React, { useEffect } from "react";
import NextImage from "next/image";

import { GlassButtonHome } from "@/components/GlassButton";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectedSortByState,
  selectedHomeTypeState,
  homeAmountState,
} from "@/lib/states";

import { BellImage, HomeInfo, HomeTypeButtonWrapper, SortingButton } from ".."; //index

// 컴포넌트 또는 페이지를 구성하는 로직
export default function SortByPage() {
  const router = useRouter();
  const { homeType, sortBy } = router.query;

  if (homeType === "none") {
    return <HomePage />;
  } else {
    return <SortedPage homeType={homeType} sortBy={sortBy} />;
  }
}

interface SortedPageProps {
  homeType: string | string[] | undefined;
  sortBy: string | string[] | undefined;
}

const SortedPage = ({ homeType, sortBy }: SortedPageProps) => {
  const router = useRouter();

  const [selectedHomeType, setSelectedHomeType] = useRecoilState(
    selectedHomeTypeState
  );

  const [selectedSortingButton, setSelectedSortingButton] =
    useRecoilState(selectedSortByState);

  useEffect(() => {
    const url = `/${selectedHomeType}/${selectedSortingButton}`;
    router.push(url, undefined, { shallow: true });
  }, [selectedHomeType, selectedSortingButton]);

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
        <MaskGroupImage
          src="/img/sortby/maskGroup.png"
          alt="Image"
          width={428}
          height={549}
        />
        <BellImage
          alt="bell"
          src="/img/home/bell.png"
          width={18.57}
          height={19.83}
        />
        <HomeTypeDiv>
          <HomeTypeButtonWrapper>
            <GlassButtonHome
              imgSrc="/img/home/flat.svg"
              clickedImgSrc="/img/home/clickedFlat.svg"
              onClick={() => {
                handleHomeTypeButtonClick("flat");
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
              }}
              isClicked={"oneRoom" == selectedHomeType}
            />
            <p>원룸</p>
          </HomeTypeButtonWrapper>
        </HomeTypeDiv>
      </MaskGroupWrapper>

      <HomesGroupWrapper homeAmount={homeAmount}>
        <LocationWrapper>
          <PinImage src="/img/sortby/locationPin.svg" alt="locationPin" />
          <LocationDiv>서울시 용산구 청파동</LocationDiv>
        </LocationWrapper>
        <ShowDiv>오피스텔을 보여드릴게요.</ShowDiv>
        <BackgroundImage
          src="/img/sortby/buildingBackground.svg"
          alt="buildingBackground"
        />
        <ChangeLocationButton>
          <ChangeLocationDiv>
            <p>위치변경하기</p>
            <img src="/img/sortby/changeLocation.svg" alt="changeLocation" />
          </ChangeLocationDiv>
        </ChangeLocationButton>
        <GrayBox>
          <SortingButtonDiv>
            <SortingButton
              onClick={() => {
                handleSortingButtonClick("recent");
              }}
              isClicked={"recent" == selectedSortingButton}
            >
              최신순
            </SortingButton>
            <SortingButton
              onClick={() => {
                handleSortingButtonClick("price");
              }}
              isClicked={"price" == selectedSortingButton}
            >
              가격순
            </SortingButton>
            <SortingButton
              onClick={() => {
                handleSortingButtonClick("area");
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
        </GrayBox>

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

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const MaskGroupWrapper = styled.div`
  background-color: #000000;
  height: 549px;
  position: relative;
  top: 0 px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HomeTypeDiv = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  justify-content: space-between;

  width: 322px;
  height: 78px;

  top: 86px;

  margin: 0px;
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

  height: ${(props) => `${600 + props.homeAmount * 142}px`};

  width: 100%;

  top: 193px;

  display: flex;
  justify-content: center;
`;

const LocationWrapper = styled.div`
  position: absolute;

  height: 24px;
  width: 350px;

  top: 33px;
  left: 20px;

  display: flex;
  /* justify-content: center; */
  align-items: center;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const PinImage = styled.img`
  position: absolute;
  z-index: 3;

  width: 12.84px;
  height: 18.57px;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const LocationDiv = styled.div`
  position: absolute;

  left: 20.35px;

  font-size: 20px;
  font-weight: 300;

  width: 330px;
  height: 24px;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ShowDiv = styled.div`
  position: absolute;

  display: flex;
  align-items: center;

  font-size: 24px;
  font-weight: 500;

  left: 20px;
  top: 66px;

  width: 250px;
  height: 29px;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 2;

  width: 164px;
  height: 135px;

  top: 24px;
  right: 20px;
`;

const ChangeLocationButton = styled.button`
  position: absolute;
  z-index: 3;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  right: 18px;
  top: 94px;

  width: 139px;
  height: 33px;

  border-radius: 27px;
  border: none;

  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), -1px 1px 2px rgba(0, 0, 0, 0.2),
    1px -1px 2px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(0, 0, 0, 0.2);

  /* border: 1px solid black;
  box-sizing: border-box; */
`;

const ChangeLocationDiv = styled.div`
  //ChangeLocationButton 내용 div
  position: absolute;
  height: 21px;

  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 14px;
    font-weight: 400;
  }
  & > img {
    margin-left: 8px;
  }
`;

const GrayBox = styled.div`
  position: absolute;
  z-index: 3;

  width: 100%;
  height: 59px;

  top: 137px;

  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SortingButtonDiv = styled.div`
  position: absolute;
  z-index: 2;

  width: 350px;
  height: 31px;

  justify-content: space-between;
  display: flex;
`;

const TellingHomeAmountDiv = styled.div`
  position: absolute;
  z-index: 2;

  width: 350px;
  height: 19px;

  font-size: 16px;
  font-weight: 300;

  top: 225px;
`;

const HomesGroupDiv = styled.div`
  //여러개의 매물들 전체를 감싸는 Div
  position: absolute;
  z-index: 3;

  width: 350px;
  height: auto;

  top: 263px;

  /* border: 1px solid red; */
`;

const MaskGroupImage = styled.img`
  position: absolute;
  top: -47px;
  width: 100%;
`;
