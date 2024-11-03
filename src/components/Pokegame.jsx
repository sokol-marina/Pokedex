
import React from "react";
import Pokedex from "./Pokedex";

const Pokegame = () => {
  const pokemon = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
  ];

  // Shuffle and split into two hands
  const shuffled = [...pokemon].sort(() => Math.random() - 0.5);
  const hand1 = shuffled.slice(0, 4);
  const hand2 = shuffled.slice(4, 8);

  // Calculate experience for each hand
  const exp1 = hand1.reduce((total, p) => total + p.experience, 0);
  const exp2 = hand2.reduce((total, p) => total + p.experience, 0);

  // Determine the winner
  const isHand1Winner = exp1 > exp2;

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={isHand1Winner} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={!isHand1Winner} />
    </div>
  );
};

export default Pokegame;
