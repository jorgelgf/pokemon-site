import React, { useState } from "react";
import styled from "styled-components";
import ActionAreaCard from "../actionCard/ActionCard";
import useFetch from "../api/useFetch";
import sadpok from "../../img/sadpok.gif";
import Loading from "./Loading";
export default function Input({ id }) {
  const [state, setState] = useState();
  const { executeFetch, loading, pok, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (state)
      await executeFetch(
        `https://pokeapi.co/api/v2/pokemon/${state.toLowerCase()}`
      );
  }
  if (pok) {
  }
  if (loading) return <Loading />;
  return (
    <>
      <DivForm onSubmit={handleSubmit}>
        <InputSearch
          id={id}
          type="search"
          value={state ? state : ""}
          onChange={(e) => setState(e.target.value)}
          autoComplete="off"
        />
        <ButtonSearch>SEARCH</ButtonSearch>
      </DivForm>
      {error && (
        <DivSad>
          <p>{error}</p>
          <ImageSad src={sadpok} alt="sad" />
        </DivSad>
      )}
      {pok && (
        <DivCard>
          <ActionAreaCard
            name={pok.name}
            type={pok.types[0].type.name}
            img={pok.sprites.front_default}
          />
        </DivCard>
      )}
    </>
  );
}

//Styled components

const DivForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
const InputSearch = styled.input`
  width: 50vw;
  height: 50px;
  margin-bottom: 30px;
  font-size: 15px;
  font-family: "Press Start 2P", cursive;
  border-radius: 5px;
  decoration: none;
  outline: 0;
  text-align: center;
  border: none;
  box-shadow: 1px 0em 0.4em 0.4px rgb(151, 135, 124);
  @media (max-width: 1024px) {
    font-size: 25px;
    height: 80px;
    width: 70%;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 100px;
  }
`;

const ButtonSearch = styled.button`
  width: 180px;
  height: 50px;
  border-color: #e0dab8;
  border-radius: 10px;
  background-color: #f0c909;
  color: #726412;
  font-size: 30px;

  @media (max-width: 1024px) {
    font-size: 50px;
    height: 60px;
    width: 250px;
  }
`;

const DivSad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  font-family: "Press Start 2P", cursive;
  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;

const ImageSad = styled.img`
  border-radius: 50%;
  width: 200px;
  border: solid 10px #d9d4dd6c;
`;
const DivCard = styled.div`
  transform: translateY(20px);
  padding-bottom: 50px;
  animation: animeUp 0.4s forwards;

  @keyframes animeUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
