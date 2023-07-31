import styled from "styled-components";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";

import NewHomeTop from "@/components/register/NewHomeTop";
import FindAddress from "@/components/register/FindAddress";
import Image from "next/image";
import { useRouter } from "next/router";

interface SquareBlockProps {
  isSatisfied: boolean;
  imgSrc: string;
  satisfiedImgSrc: string;
  name: string;
}

const SquareBlock = ({
  isSatisfied,
  imgSrc,
  satisfiedImgSrc,
  name,
}: SquareBlockProps) => {
  return (
    <SquareDiv isSatisfied={isSatisfied}>
      <div
        style={
          {
            //   border: "1px solid red",
          }
        }
      >
        <div
          style={{
            // border: "1px solid red",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {isSatisfied ? (
            <img
              src={satisfiedImgSrc}
              alt="satisfiedImage"
              height={36}
              width={36}
            />
          ) : (
            <img src={imgSrc} alt="Image" height={36} width={36} />
          )}
        </div>
        <SquareTitle isSatisfied={isSatisfied}>{name}</SquareTitle>
      </div>
    </SquareDiv>
  );
};

export default SquareBlock;

interface IsSatisfiedProps {
  isSatisfied?: boolean;
}

export const SquareDiv = styled.div<IsSatisfiedProps>`
  width: 110px;
  height: 110px;

  background-color: ${(props) => (props.isSatisfied ? "white" : "#F3F3F3")};

  display: flex;
  justify-content: center;
  align-items: center;

  border: ${(props) => (props.isSatisfied ? "1px solid #D7DBDE" : "none")};
  border-radius: 10px;
  box-sizing: border-box;
`;

const SquareTitle = styled.div<IsSatisfiedProps>`
  color: ${(props) => (props.isSatisfied ? "black" : "#B3B3B3")};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: 400;

  margin-top: 8px;

  /* border: 1px solid black;
  box-sizing: border-box; */
`;
