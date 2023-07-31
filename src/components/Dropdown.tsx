import React, { useState } from "react";
import styled from "styled-components";
import { displayPartsToString } from "typescript";

interface DropdownProps {
  options: string[];
  selectedDropdownItem: string;
  setSelectedDropdownItem: any;
  isEnteredDropdownItem: boolean;
  isSmall?: boolean;
}

const Dropdown = ({
  options,
  selectedDropdownItem,
  setSelectedDropdownItem,
  isEnteredDropdownItem,
  isSmall,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedDropdownItem, setSelectedDropdownItem] = useState("");

  // const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedDropdownItem(item);
    setIsOpen(false);
  };

  return (
    <>
      <DropdownButton
        onClick={handleToggle}
        isOpen={isOpen}
        isEntered={isEnteredDropdownItem}
        isSmall={isSmall}
      >
        {selectedDropdownItem}
        <img
          src="/img/src/dropdown.svg"
          alt="dropdown"
          style={{ right: "10px", position: "absolute" }}
        />
      </DropdownButton>
      {isOpen && (
        <DropdownList isSmall={isSmall}>
          {options.map((item) => (
            <DropdownItem
              key={item}
              onClick={() => handleItemClick(item)}
              isSmall={isSmall}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </>
  );
};

interface DropdownButtonProps {
  isOpen: boolean;
  isEntered: boolean;
  isSmall?: boolean;
}

const DropdownButton = styled.button<DropdownButtonProps>`
  position: relative;

  /* width: 110px; */
  width: ${(props) => (props.isSmall ? "90px" : "110px")};

  height: 49px;

  right: 0px;

  font-size: 17px;
  font-weight: 400;

  display: flex;
  align-items: center;
  text-align: center;

  padding-left: 25px;

  background-color: ${(props) => (props.isEntered ? "white" : "#F3F3F3")};

  border-top-right-radius: 34px;
  border-top-left-radius: 34px;
  border-bottom-right-radius: ${(props) => (props.isOpen ? "0px" : "34px")};
  border-bottom-left-radius: ${(props) => (props.isOpen ? "0px" : "34px")};

  border: ${(props) =>
    props.isEntered ? "1px solid #d7dbde" : "0px"}; //없애면 안됨
  box-sizing: border-box;
`;

interface isSmallProps {
  isSmall?: boolean;
}
const DropdownList = styled.ul<isSmallProps>`
  position: absolute;

  z-index: 3;

  top: 100%;
  right: 0px;

  background-color: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  /* width: 110px; */
  width: ${(props) => (props.isSmall ? "90px" : "110px")};

  list-style: none;

  padding: 0;
  margin: 0;

  border-bottom-left-radius: 34px;
  border-bottom-right-radius: 34px;
`;

const DropdownItem = styled.li<isSmallProps>`
  font-size: 14px;

  z-index: 3;

  width: ${(props) => (props.isSmall ? "90px" : "110px")};
  height: 49px;

  font-size: 17px;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;

  border-radius: 34px;

  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;
export default Dropdown;
