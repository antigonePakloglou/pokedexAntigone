import axios from 'axios';
import {useState, useEffect} from 'react';
import {ListGroup} from 'react-bootstrap';

const PokemonFiche = ({id}) => {
    
    //recupération données d'un pokémon
    let [pokemon, setPokemon] = useState([]);

    const url = 'http://localhost:3004/pokemons';
    useEffect(() => {
        axios.get(`${url}/${id}`)
        .then(resp => {
           setPokemon(resp.data);
       });
      }, []); 

        return (
           <div className="PokemonFiche">
            <h3>Fiche</h3>
            <div  key={id} >
            <ListGroup>
                <ListGroup.Item variant="primary">ID : {pokemon.id}</ListGroup.Item>
                <ListGroup.Item variant="primary">Nom : {pokemon.name.french}</ListGroup.Item>
                <ListGroup.Item variant="primary">Type : {pokemon.type.map((t) => t )}</ListGroup.Item>
            </ListGroup>
          </div> 
          </div>
        );
     
}

export default PokemonFiche