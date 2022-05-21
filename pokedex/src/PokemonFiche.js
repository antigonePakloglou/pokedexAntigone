import axios from 'axios';
import {Container, Row, Col, Form} from 'react-bootstrap';
import {useState, useEffect, useRef} from 'react';
import './createFormAssets/css/unique.css';
import {useParams} from "react-router-dom";

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonFiche = () => {
    
    //recupération données d'un pokémon
    let [pokemon, setPokemon] = useState([]);
    const { id } = useParams();
    const [nom, setNom] = useState('')
    const [type, setType] = useState('')
    const [HP, setHp] = useState('')
    const [Attack, setAttack] = useState('')
    const [Defense, setDefense]  = useState('')
    const [SpAttack, setSpAttack] = useState('')
    const [SpDefense, setSpDefense] = useState('')
    const [Speed, setSpeed] = useState('')

    useEffect(() => {
      let mounted = true;
      axios.get(`http://localhost:3004/pokemons/${id}`)
      .then(resp => {
        if(mounted) {
         setPokemon(resp.data);
         
        }
     })
     return () => mounted = false;
    }, [id]); 

    function editPokemon (){
      var fields = document.getElementById("formulaire").getElementsByTagName('*');
      for(var i = 0; i < fields.length; i++)
      {
        let isActive =  fields[i].disabled ? false : true;
          fields[i].disabled = isActive;
      }
  }

  function putRequest (){
    async function updatePokemon() {

        let data = { name: nom, type: type, base:{HP:parseInt(HP), Attack: parseInt(Attack), Defense: parseInt(Defense), 'Sp. Attack': parseInt(SpAttack), 'Sp. Defense': parseInt(SpDefense), Speed: parseInt(Speed)} };
    
        await axios.put('http://localhost:3004/pokemons', data);
    
    }
    updatePokemon();
}


if(pokemon.length != 0) {
  return(
    <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
      <div class="wrapper wrapper--w780">
        <div class="card card-3">
          <div class="card-heading"></div>
          <div class="card-body"></div>
          <button class="btn  btn--green" onClick={ () => {editPokemon() }}><FontAwesomeIcon icon={faPenToSquare} size="sm" /></button>

            <form id='formulaire' onSubmit={ e => {e.preventDefault(); putRequest() }} >
            <Container>
              <div class="input-group">
                <label>Nom</label>
                  <input  class="input--style-3" type="text" name="Nom" onChange={(e) => {setNom(e.target.value );}} value={pokemon['name']['french']}/>
              </div>
                <Row> 
                  <Col>
                      <div class="input-group">
                        <label>HP</label>
                          <input disabled class="input--style-3" type="text" name="HP" onChange={(e) => {setHp(e.target.value );}} value={pokemon['base']['HP']}/> 
                      </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                      <div class="input-group">
                      <label>Attaque</label>
                          <input disabled class="input--style-3" type="text" name="Attaque" onChange={(e) => {setAttack(e.target.value );}} value={pokemon['base']['Attack']}/>
                      </div>
                  </Col>
                  <Col>
                      <div class="input-group">
                      <label>Defense</label>
                          <input disabled class="input--style-3" type="text" name="Defense" onChange={(e) => {setDefense(e.target.value );}} value={pokemon['base']['Defense']} />
                      </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                      <div class="input-group">
                      <label>Sp. Attaque</label>
                          <input disabled class="input--style-3" type="text" name="Sp.Attaque" onChange={(e) => {setSpAttack(e.target.value );}}  value={pokemon['base']['Sp. Attack']} />
                      </div>
                  </Col>
                  <Col>
                      <div class="input-group">
                      <label>Sp. Defense</label>
                          <input disabled class="input--style-3" type="text" name="Sp.Defense" onChange={(e) => {setSpDefense(e.target.value );}} value={pokemon['base']['Sp. Defense']} />
                      </div>
                      <div class="input-group">
                      <label>Vitesse</label>
                          <input disabled class="input--style-3" type="text" name="Vitesse" onChange={(e) => {setSpeed(e.target.value );}} value={pokemon['base']['Speed']} />
                      </div>
                  </Col>
                </Row>
              </Container>
              <div class="p-t-10">
                  <button class="btn btn--pill btn--green" disabled type="submit">Enregistrer</button>
              </div>
            </form>
          </div> 
      </div>
    </div>

)
}



      
}

export default PokemonFiche