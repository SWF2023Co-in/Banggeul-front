import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { atom, RecoilRoot } from "recoil";

import NavigationBar from "@/components/NavigaitonBar";

import "../public/font/fonts.css"; // Import the custom fonts
import "@/components/register/findAddress.css";
import { useRouter } from "next/router";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pretendard', sans-serif;
  }
`;

declare global {
  interface Window {
    Kakao: any;
  }
  const Kakao: any;
}

const noNavigationBarRouterPath = [
  "/register/newHome/step1",
  "/register/newHome/step2",
  "/register/newHome/step3",
  "/register/newHome/step4",
];
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    window.Kakao.init("4a406fbd2d60f59ee481e8b106cda45c");
    console.log(Kakao.isInitialized());
  }, []);

  const showNavigationBar = noNavigationBarRouterPath.includes(router.pathname);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
          async
        />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
        {!showNavigationBar && <NavigationBar />}
      </RecoilRoot>
    </>
  );
}
