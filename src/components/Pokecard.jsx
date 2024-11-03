import React from "react";
import "./../css/Pokecard.css"
const Pokecard = ({id, name, type, experience})=>{
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return(
        <div className="Pokecard">
            <h4 className="Pokecard-title" >{name}</h4>
            <img src={img} alt="pokemon" />
            <p>Type: {type}</p>
            <p>EXP: {experience}</p>
        </div>

    )
}
export default Pokecard;