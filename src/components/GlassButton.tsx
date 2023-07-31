import React from "react";
import styled from "styled-components";

interface GlassButtonProps {
  onClick?: () => void;
  imgSrc: string;
  clickedImgSrc?: string;
  isClicked: boolean;
}

export const GlassButtonHome: React.FC<GlassButtonProps> = ({
  onClick,
  imgSrc,
  isClicked,
  clickedImgSrc,
}) => {
  return (
    <GlassButtonHomeWrapper onClick={onClick} isClicked={isClicked}>
      {isClicked ? (
        <Image src={clickedImgSrc} alt="Your Image" />
      ) : (
        <Image src={imgSrc} alt="Your Image" />
      )}
    </GlassButtonHomeWrapper>
  );
};

export const GlassButtonNewHome: React.FC<GlassButtonProps> = ({
  imgSrc,
  isClicked,
}) => {
  return (
    <GlassButtonNewHomeWrapper isClicked={isClicked}>
      {isClicked ? (
        <img
          src="/img/src/newHomeTop/stepCheck.svg"
          alt="Your Image"
          style={{ zIndex: 4 }}
        />
      ) : (
        <img src={imgSrc} alt="Your Image" style={{ zIndex: 4 }} />
      )}
    </GlassButtonNewHomeWrapper>
  );
};

interface GlassButtonWrapperProps {
  isClicked: boolean;
}
const GlassButtonHomeWrapper = styled.button<GlassButtonWrapperProps>`
  width: 52px;
  height: 52px;
  background-color: ${(props) =>
    props.isClicked ? "#BFFA00" : "rgba(255, 255, 255, 0.25)"};
  border: none;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) =>
    props.isClicked
      ? "none"
      : "1px 0px 0px 0px rgba(255, 255, 255, 0.4), 1px 1px 0px 0px rgba(255, 255, 255, 0.4)"};
`;

const GlassButtonNewHomeWrapper = styled.button<GlassButtonWrapperProps>`
  width: 31.2px;
  height: 31.2px;
  background-color: ${(props) =>
    props.isClicked ? "#BFFA00" : "rgba(62, 62, 62, 1)"};
  border: none;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) =>
    props.isClicked
      ? "none"
      : "1px 0px 0px 0px rgba(255, 255, 255, 0.4), 1px 1px 0px 0px rgba(255, 255, 255, 0.4)"};
`;

const Image = styled.img`
  width: 22px;
  height: 22px;
`;
