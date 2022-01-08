import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <DiVNotFound>
      <h1>404</h1>
      <p>Página não encontrada</p>
      <br /> <br /> <br />
      <Link to="/" style={{ textDecoration: "none" }}>
        Voltar
      </Link>
    </DiVNotFound>
  );
}

//Styled components

const DiVNotFound = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  align-items: center;
`;
