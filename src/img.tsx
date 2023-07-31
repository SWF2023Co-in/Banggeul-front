import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NextImage from "next/image";
interface Props {
  imageUrl: string;
  gifUrl?: string | undefined;
}

export const CroppedImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div
      style={{
        width: "300px", // 원하는 크기로 설정
        height: "200px",
        overflow: "hidden", // 이미지 영역을 넘어가는 부분은 보이지 않도록 설정
      }}
    >
      <img
        src={imageUrl}
        alt="Cropped Image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // 이미지 비율에 맞게 잘리도록 설정
        }}
      />
    </div>
  );
};

export const HomeInfoImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div
      style={{
        width: "140px", // 원하는 크기로 설정
        height: "105px",
        overflow: "hidden", // 이미지 영역을 넘어가는 부분은 보이지 않도록 설정
        borderRadius: "10px",
      }}
    >
      <img
        src={imageUrl}
        alt="Cropped Image"
        style={{
          width: "140px",
          objectFit: "cover", // 이미지 비율에 맞게 잘리도록 설정
        }}
      />
    </div>
  );
};

export const MaskGroupGif: React.FC<Props> = ({ gifUrl, imageUrl }) => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // 3초 후에 GIF를 멈추도록 처리
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 3000); // 3초

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <MaskGroupImage src={imageUrl} alt="Image" width={428} height={549} />
      {showGif && (
        <MaskGroupImage src={gifUrl} alt="GIF" width={428} height={549} />
      )}
    </>
  );
};
const MaskGroupImage = styled.img`
  position: absolute;
  top: -47px;
  width: 100%;
`;
