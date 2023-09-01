import { type } from "os";
import { useState } from "react";
import { useRef } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import {
  registerHomeUpLoadFileState,
  registerHomeWholeInfoState,
} from "@/lib/states";

const UploadedImage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [registerHomeUpLoadFile, setRegisterHomeUpLoadFile] = useRecoilState(
    registerHomeUpLoadFileState
  );
  const updateRegisterHomeUpLoadFile = (file: object) => {
    setRegisterHomeUpLoadFile(file);
  };

  const [registerHomeWholeInfo, setRegisterHomeWholeInfo] = useRecoilState(
    registerHomeWholeInfoState
  );

  const updateRegisterHomeWholeInfo = (fileName: string, index: number) => {
    setRegisterHomeWholeInfo({
      ...registerHomeWholeInfo,
      images: [
        ...registerHomeWholeInfo.images,
        {
          fileName: fileName,
          index: index,
        },
      ],
    });
  };

  const handleClick = () => {
    // input 엘리먼트가 클릭되었을 때 input 버튼을 클릭하기 위해 click() 메서드를 사용
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const [imageSrc, setImageSrc]: any = useState(null);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      updateRegisterHomeUpLoadFile(file);
      updateRegisterHomeWholeInfo(file.name, 1);
    }
  };

  return (
    <>
      {imageSrc ? (
        <HomeInfoImage imageUrl={imageSrc} />
      ) : (
        <StyledUploadImageButton onClick={handleClick}>
          <img src="/img/src/register/camera.svg" alt="camera" />
          <div style={{ textAlign: "center" }}>사진을 등록하세요.</div>
          <input
            ref={inputRef}
            accept="image/*"
            type="file"
            onChange={onUpload}
            style={{ display: "none" }}
          />
        </StyledUploadImageButton>
      )}
    </>
  );
};

export default UploadedImage;

interface Props {
  imageUrl: string;
}

const HomeInfoImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div
      style={{
        width: "200px", // 원하는 크기로 설정
        height: "150px",
        overflow: "hidden", // 이미지 영역을 넘어가는 부분은 보이지 않도록 설정
        borderRadius: "10px",
      }}
    >
      <img
        src={imageUrl}
        alt="Cropped Image"
        style={{
          width: "200px",
          objectFit: "cover", // 이미지 비율에 맞게 잘리도록 설정
        }}
      />
    </div>
  );
};

const StyledUploadImageButton = styled.div`
  width: 200px;
  height: 150px;
  background-color: #212429;
  color: white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 15.6;
`;

// const UploadedImage = () => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleClick = () => {
//     // div가 클릭되었을 때 input을 클릭하기 위해 focus() 메서드를 사용
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   const [imageSrc, setImageSrc]: any = useState(null);

//   const onUpload = (e: any) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     return new Promise<void>((resolve) => {
//       reader.onload = () => {
//         setImageSrc(reader.result || null); // 파일의 컨텐츠
//         resolve();
//       };
//     });
//   };
//   return (
//     <>
//       <UploadImageButton onClick={handleClick} />
//       <input
//         accept="image/*"
//         multiple
//         type="file"
//         onChange={(e) => onUpload(e)}
//       />
//       <HomeInfoImage imageUrl={imageSrc} />
//     </>
//   );
// };

// export default UploadedImage;
// interface Props {
//   imageUrl: string;
// }

// const HomeInfoImage: React.FC<Props> = ({ imageUrl }) => {
//   return (
//     <div
//       style={{
//         width: "200px", // 원하는 크기로 설정
//         height: "150px",
//         overflow: "hidden", // 이미지 영역을 넘어가는 부분은 보이지 않도록 설정
//         borderRadius: "10px",
//       }}
//     >
//       <img
//         src={imageUrl}
//         alt="Cropped Image"
//         style={{
//           width: "200px",
//           objectFit: "cover", // 이미지 비율에 맞게 잘리도록 설정
//         }}
//       />
//     </div>
//   );
// };

// const UploadImageButton = styled.div`
//   width: 200px;
//   height: 150px;

//   background-color: black;

//   border-radius: 5px;
// `;
