import React from "react";
import styled from "styled-components";
import bgTop from "../../../img/bgTop.jpg";

export default function Header({ id }) {
  return (
    <>
      <DivTitle>
        <label htmlFor={id}>Pokemon</label>
      </DivTitle>
    </>
  );
}

//Styled components

const DivTitle = styled.div`
  font-family: "Press Start 2P", cursive;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  margin: 30px;
  width: 100vw;
  height: 30vh;
  text-align: center;
  color: #f0c909;
  text-shadow: 0.1rem 0.3rem 10px rgb(54, 95, 172), 0.3rem 0.2rem 0.1rem black;
  background-image: linear-gradient(to right, #4b80f3, transparent, #dfdf14),
    url(${bgTop});
  background-size: cover;

  @media (max-width: 700px) {
    font-size: 40px;
    height: 60vh;
  }
  @media (max-width: 380px) {
    font-size: 30px;
  }
`;
