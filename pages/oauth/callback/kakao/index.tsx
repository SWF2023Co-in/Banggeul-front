// import { useEffect } from "react";
// import axios from "axios";

// const KakaoCallback = () => {
//   useEffect(() => {
//     const params = new URL(document.location.toString()).searchParams;
//     const code = params.get("code");
//     const grantType = "authorization_code";
//     const REST_API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;
//     const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URL}`;

//     try {
//       const response = await axios.get(
//         `https://banggeul.store/login/kakao?code=${code}`
//       );
//       const data = response.data;
//       console.log("kakaoLogin data:", data);
//       // 데이터를 활용하여 원하는 동작을 수행합니다.
//     } catch (error) {
//       console.error("kakaoLogin error:", error);
//       // 에러 처리를 수행합니다.
//     }
//   }, []);

//   return <div>로그인 성공!</div>;
// };
// export default KakaoCallback;

import React, { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    const fetchData = async () => {
      const params = new URL(document.location.toString()).searchParams;
      const code = params.get("code");
      const grantType = "authorization_code";
      const REST_API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;
      const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URL}`;

      try {
        const response = await axios.get(
          `https://banggeul.store/login/kakao?code=${code}`
        );
        const data = response.data;
        console.log("kakaoLogin data:", data);
        // 데이터를 활용하여 원하는 동작을 수행합니다.
      } catch (error) {
        console.error("kakaoLogin error:", error);
        // 에러 처리를 수행합니다.
      }
    };

    fetchData();
  }, []);

  return <div>로그인 성공!</div>;
};

export default KakaoCallback;
