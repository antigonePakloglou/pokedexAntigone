import { getPokemonById } from './Service';
import {useState, useEffect} from 'react';
const PokemonFiche = ({id}) => {
 
    //recupération données d'un pokémon
    let [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemonById(id).then((data) => {
            setPokemon(data);
        }); console.log("info pok", pokemon);
        }, []);
  
        return (
           <div className="PokemonFiche">
            <h3>Fiche</h3>
            <div  key={id} >
           <p> {pokemon.id}</p>
          </div> 
          </div>
        );
     
}

export default PokemonFiche