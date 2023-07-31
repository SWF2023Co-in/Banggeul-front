//나중에 수정. //무쟈게 느림
import { useRouter } from "next/router";
import { useEffect } from "react";

const pathGroup = ["/none", "/flat", "/villa", "/oneRoom", "/officetel"];

export default function HomeTypePage() {
  const router = useRouter();

  useEffect(() => {
    if (pathGroup.includes(router.asPath)) {
      router.push("/none/recent");
    }
  }, [router.asPath]);
}

// import styled from "styled-components";
// import React from "react";
// import { GetServerSideProps } from "next";

// import { useRouter } from "next/router";
// const pathGroup = ["/none", "/flat", "/villa", "/oneRoom", "/officetel"];
// const pathGroupRemoveSlash = ["none", "flat", "villa", "oneRoom", "officetel"];

// // 페이지 컴포넌트
// export default function HomeTypePage() {
//   const router = useRouter();

//   // 빈 경로 "/none"으로 접근할 때, 자동으로 "/none/recent"로 이동하는 로직
//   if (pathGroup.includes(router.asPath)) {
//     return null; // 빈 화면 또는 로딩 스피너 등으로 사용자에게 아무것도 보여주지 않음
//   }

//   // ... 페이지 컴포넌트의 내용 ...

//   return <div>잘못된 접근</div>;
// }

// // 서버 측에서 라우팅 처리
// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   // 빈 경로 "/pathgroup_원소"으로 접근할 때, 자동으로 "/pathGroup_원소/recent"로 이동
//   if (pathGroupRemoveSlash.includes(query.homeType)) {
//     const destination = `/${query.homeType}/recent`;
//     return {
//       redirect: {
//         destination,
//         permanent: false, // temporary redirect (302)
//       },
//     };
//   }

//   // homeType 값이 'none'이 아닐 경우, 기본적인 라우팅
//   return {
//     props: {},
//   };
// };
