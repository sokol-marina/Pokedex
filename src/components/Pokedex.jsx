import React from 'react';
import Pokecard from './Pokecard'
import "./../css/Pokedex.css"
const Pokedex = ({ items }) => {
  
  return (
    <>
      <div className='Pokedex'>
        <h1 className='Pokedex-title'>Pokedex</h1>
        <div className='Pokedex-board'>
          {items.map((i) => (
              <Pokecard key={i.id} id={i.id} name ={i.name} type ={i.type} experience={i.base_experience}/>
          ))}
          </div>
          </div>
    </>
  );
};
export default Pokedex;
