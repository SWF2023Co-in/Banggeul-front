import React from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoLogin = () => {
  return (
    <img
      alt="카카오 로그인"
      src="/img/mypage/kakao_login_large_wide.png"
      onClick={() => {
        Kakao.Auth.authorize({
          redirectUri:
            "http://localhost:3000/oauth/callback/kakao" /* redirect되는 URL */,
        });
      }}
      width={300}
      height={45}
      style={{ marginBottom: "5px" }}
    />
  );
};

export default KakaoLogin;
