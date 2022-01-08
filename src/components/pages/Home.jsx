import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Input from "./Input";

export default function Home() {
  return (
    <DivFull>
      <Header id="nameSite" />
      <Input id="nameSite" />
    </DivFull>
  );
}

//Styled components
const DivFull = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.87);
`;
