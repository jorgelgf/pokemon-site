import React from "react";
import styled from "styled-components";
import pokeball from "../../img/pokeball.png";
const Loading = () => {
  return (
    <DivLoading>
      <img
        style={{
          width: "100px",
          height: "100px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        src={pokeball}
        alt="pokeball"
      />
    </DivLoading>
  );
};

const DivLoading = styled.div`
  width: 100px;
  height: 100px;
  //border: 5px solid;
  border-radius: 50%;
  border-top-color: transparent;
  margin: 100px auto;
  color: #222222;
  animation: load 0.2s linear infinite;
  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
