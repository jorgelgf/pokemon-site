import React from "react";

export const WeakStrong = ({ type }) => {
  //pokemon weaknesses

  const weak = {
    Fire: " Water, Earth, Stone, Dragon",
    Normal: " Fighter, Stone, Metallic and Ghost",
    Water: " Grass, Electric, Dragon",
    Grass: " Fire, Poisonous, Bug, Flying, Ice, Dragon, Metallic ",
    Electric: " Ground, Grass, Dragon",
    Bug: " Fire, Flying, Rock, Fighting, Poison, Ghost, Steel",
    Fighting: " Fairy, Flying, Psychic, Poisonous, Insect, Ghost",
    Poison: " Ground, Psychic",
    Ground: " Fire, Poison, Bug, Flying, Ice, Dragon, Steel",
    Psychic: " Bug, Dark",
    Rock: " Water, Grass, Fighter, Terrestrial, metallic",
    Ghost: " Dark, Normal, Ghost",
    Ice: " Fire, Fighting, Rock, Steel, Water",
    Dragon: " Dragon, Ice, Steel, Fairy",
    Dark: " Fighting, Bug, Fairy",
    Steel: "Fire, Poison, Bug, Fairy, Ground",
    Fairy: "Fire, Ground, Flying, Poison, Steel",
  };
  const strong = {
    Fire: " Bug, Grass, Ice, Steel",
    Normal: " --",
    Water: " Fire, Ground, Rock",
    Grass: " Ground, Rock, Water",
    Electric: " Flying, Water",
    Bug: " Grass, Dark, Psychic",
    Fighting: " Dark, Ice, Normal, Rock, Steel",
    Poison: " Fairy, Grass",
    Ground: " Electric, Fire, Poison, Rock, Steel",
    Psychic: " Fighting, Poison",
    Rock: " Bug, Fire, Flying, Ice",
    Ghost: " Ghost, Psychic",
    Ice: " Dragon, Flying, Grass, Ground",
    Dragon: " Dragon",
    Dark: " Ghost, Psychic",
    Steel: " Fairy, Ice, Rock",
    Fairy: " Fighting, Dark, Dragon",
  };
  //response
  switch (type) {
    case "fire":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Fire}
          <br />
          <b>Weakness:</b> {weak.Fire}
        </>
      );
    case "normal":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Normal}
          <br />
          <b>Weakness:</b> {weak.Normal}
        </>
      );
    case "water":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Water}
          <br />
          <b>Weakness:</b> {weak.Water}
        </>
      );
    case "grass":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Grass}
          <br />
          <b>Weakness:</b> {weak.Grass}
        </>
      );
    case "electric":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Electric}
          <br />
          <b>Weakness:</b> {weak.Electric}
        </>
      );
    case "bug":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Bug}
          <br />
          <b>Weakness:</b> {weak.Bug}
        </>
      );
    case "fighting":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Fighting}
          <br />
          <b>Weakness:</b> {weak.Fighting}
        </>
      );
    case "poison":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Poison}
          <br />
          <b>Weakness:</b> {weak.Poison}
        </>
      );
    case "ground":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Ground}
          <br />
          <b>Weakness:</b> {weak.Ground}
        </>
      );
    case "psychic":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Psychic}
          <br />
          <b>Weakness:</b> {weak.Psychic}
        </>
      );
    case "rock":
      return (
        <>
          <b> Strong Against:</b>
          {strong.rock}
          <br />
          <b>Weakness:</b> {weak.rock}
        </>
      );
    case "ghost":
      return (
        <>
          <b>Strong Against:</b>
          {strong.Ghost}
          <br />
          <b>Weakness:</b> {weak.Ghost}
        </>
      );
    case "ice":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Ice}
          <br />
          <b>Weakness:</b> {weak.Ice}
        </>
      );
    case "dragon":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Dragon}
          <br />
          <b>Weakness:</b> {weak.Dragon}
        </>
      );
    case "dark":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Dark}
          <br />
          <b>Weakness:</b> {weak.Dark}
        </>
      );
    case "steel":
      return (
        <>
          <b> Strong Against:</b>
          {strong.Steel}
          <br />
          <b>Weakness:</b> {weak.Steel}
        </>
      );

    default:
      return <>'Not Found'</>;
  }
};
