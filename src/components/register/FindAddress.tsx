import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

const FindAddress = (props: any) => {
  const complete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let autoJibunAddress = data.autoJibunAddress;
    let bcode = data.bcode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    console.log(autoJibunAddress);

    props.setcompany({
      ...props.company,
      address: fullAddress,
      lotNumberAddress: autoJibunAddress,
      bcode: bcode,
    });
  };

  return (
    <div>
      <DaumPostcode className="postmodal" autoClose onComplete={complete} />
    </div>
  );
};

export default FindAddress;
