import React from "react";

export const Weak = ({ type }) => {
  //pokemon weaknesses

  const counter = {
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

  switch (type) {
    case "fire":
      return <>{counter.Fire}</>;
    case "normal":
      return <>{counter.Normal}</>;
    case "water":
      return <>{counter.Water}</>;
    case "grass":
      return <>{counter.Grass}</>;
    case "electric":
      return <>{counter.Electric}</>;
    case "bug":
      return <>{counter.Bug}</>;
    case "fighting":
      return <>{counter.Fighting}</>;
    case "poison":
      return <>{counter.Poison}</>;
    case "ground":
      return <>{counter.Ground}</>;
    case "psychic":
      return <>{counter.Psychic}</>;
    case "rock":
      return <>{counter.rock}</>;
    case "ghost":
      return <>{counter.Ghost}</>;
    case "ice":
      return <>{counter.Ice}</>;
    case "dragon":
      return <>{counter.Dragon}</>;
    case "dark":
      return <>{counter.Dark}</>;
    case "steel":
      return <>{counter.Steel}</>;

    default:
      return <>'Not Found'</>;
  }
};
