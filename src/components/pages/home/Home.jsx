import React from "react";
import Header from "../header/Header";
import Input from "../input/Input";
import * as S from "./style.jsx";
export default function Home() {
  return (
    <S.DivFull>
      <Header id="nameSite" />
      <Input id="nameSite" />
    </S.DivFull>
  );
}
