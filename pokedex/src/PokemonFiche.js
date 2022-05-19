import axios from 'axios';
import {useState, useEffect} from 'react';
import './createFormAssets/css/main.css';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";

const PokemonFiche = () => {
    
    //recupération données d'un pokémon
    let [pokemon, setPokemon] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        axios.get('http://localhost:3004/pokemons/'+id)
        .then(resp => {
          console.log(resp.data);
           setPokemon(resp.data);
       });
      }, []); 



        return (
           <div className="PokemonFiche">
            <h3>Fiche {pokemon.id}</h3>
           
          </div>
        );
     
}

export default PokemonFiche