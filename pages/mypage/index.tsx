import styled from "styled-components";
import React from "react";
import NextImage from "next/image";
import Image from "next/image";
import KakaoLogin from "@/components/KakaoLogin";

// declare global {
//   interface Window {
//     Kakao: any;
//   }
// }

// const Mypage = (): JSX.Element => {
//   return (
//     <img
//       src="/img/mypage/kakao_login_medium_narrow.png"
//       onClick={handleKakaoLoginImg}
//     />
//   );

//   function handleKakaoLoginImg() {
//     Kakao.Auth.authorize({
//       redirectUri:
//         "http://localhost:3000/oauth/callback/kakao" /* redirect되는 URL */,
//     });

//   }
// }

const Mypage = (): JSX.Element => {
  return <KakaoLogin />;
};

export default Mypage;

// `https://banggeul.store/login/kakao?code=${code}`
