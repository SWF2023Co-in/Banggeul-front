import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const KakaoCallback = () => {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const params = new URL(document.location.toString()).searchParams;
      const code = params.get("code");

      try {
        const response = await axios.get(
          `https://banggeul.store/login/kakao?code=${code}`
        );
        const access_token = response.data.response["accessToken"];
        console.log(access_token);

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;

        axios.get("https://banggeul.store/check").then((response) => {
          console.log(response);
        });
        // 데이터를 활용하여 원하는 동작을 수행합니다.
      } catch (error) {
        console.error("kakaoLogin error:", error);
        // 에러 처리를 수행합니다.
      }
    };

    fetchData();
    router.push("/");
  }, []);

  return <div>로그인 처리중입니다.</div>;
};

export default KakaoCallback;
