import React from "react";
import * as S from "./style.jsx";
import bgTop from "../../../img/bgTop.jpg";

export default function Header({ id }) {
  return (
    <>
      <S.DivTitle>
        <label htmlFor={id}>Pokemon</label>
      </S.DivTitle>
    </>
  );
}
