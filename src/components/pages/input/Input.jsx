import React, { useState } from "react";
import ActionAreaCard from "../../actionCard/ActionCard";
import useFetch from "../../api/useFetch";
import sadpok from "../../../img/sadpok.gif";
import Loading from "../loading/Loading";
import * as S from "./styles";
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
      <S.DivForm onSubmit={handleSubmit}>
        <S.InputSearch
          id={id}
          type="search"
          value={state ? state : ""}
          onChange={(e) => setState(e.target.value)}
          autoComplete="off"
        />
        <button>SEARCH</button>
      </S.DivForm>
      {error && (
        <S.DivSad>
          <p>{error}</p>
          <img src={sadpok} alt="sad" />
        </S.DivSad>
      )}
      {pok && (
        <S.DivCard>
          <ActionAreaCard
            name={pok.name}
            type={pok.types[0].type.name}
            img={pok.sprites.front_default}
          />
        </S.DivCard>
      )}
    </>
  );
}
