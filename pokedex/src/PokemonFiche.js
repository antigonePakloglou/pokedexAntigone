import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import './createFormAssets/css/unique.css';
import {useParams} from "react-router-dom";
import {importImages, concatImgName} from './fonctions';

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonFiche = () => {
    //recupération données d'un pokémon
    let [pokemon, setPokemon] = useState([]);
    const [nom, setNom] = useState()
    const [types, setTypes] = useState([])
    const [HP, setHp] = useState('')
    const [Attack, setAttack] = useState()
    const [Defense, setDefense]  = useState()
    const [SpAttack, setSpAttack] = useState()
    const [SpDefense, setSpDefense] = useState()
    const [Speed, setSpeed] = useState()
    const { id } = useParams();
    const listTypes = [];
  

    //recupération des images
    const images = importImages(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    let img = concatImgName(id);



    useEffect(() => {
      let mounted = true;
      axios.get(`http://localhost:3004/pokemons/${id}`)
      .then(resp => {
        if(mounted) {
            setPokemon(resp.data);
            setNom(resp.data['name']['french']);
            setHp(resp.data['base']['HP']);
            setAttack(resp.data['base']['Attack']);
            setDefense(resp.data['base']['Defense']);
            setSpAttack(resp.data['base']['Sp. Attack']);
            setSpDefense(resp.data['base']['Sp. Defense']);
            setSpeed(resp.data['base']['Speed']); 
            
           
        }
     })
     return () => {
        mounted = false;
       
    }
    }, [id]); 

    function editPokemon (){
      var fields = document.getElementsByTagName('input');
      for(var i = 0; i < fields.length; i++)
      {
          fields[i].disabled = false;
          fields[i].style.background = '#FFF4F4';
      }
      document.getElementById("sauvegarder").style.display = 'inline-block';
  }

  function sauvegarderPokemon (){
    var fields = document.getElementsByTagName('input');
    for(var i = 0; i < fields.length; i++)
    {
        fields[i].disabled = true;
        fields[i].style.background = 'none';
    }
    document.getElementById("sauvegarder").style.display = 'none';
}

    function putRequest (){
    async function updatePokemon() {

        let data = { name:{french: nom}, type: listTypes, base:{HP:parseInt(HP), Attack: parseInt(Attack), Defense: parseInt(Defense), 'Sp. Attack': parseInt(SpAttack), 'Sp. Defense': parseInt(SpDefense), Speed: parseInt(Speed)} };
    
        await axios.put(`http://localhost:3004/pokemons/${id}`, data);
    
    }
    updatePokemon();
  }

  function isChecked(){
    if( pokemon['type'].length > 0){
      pokemon['type'].forEach((t) => {
        listTypes.push(t);
        document.getElementById(t).checked = true;
        document.getElementById(t).style.backgroundColor = '#000';
      }); 
    }
  }
    
  

  function addType(id){
    //recup types selectionnées
    var fields = document.getElementById(id);
    if( fields.checked){ 
        listTypes.push(fields.value); 
    } else{
        let index = listTypes.indexOf(fields.value);
        if( index != -1){
            listTypes.splice(index, 1);
        } 
    }  
}

  if(pokemon.length != 0) {
    setTimeout(isChecked, 1000);
    return(
      <div class="page-wrapper bg p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w960">
          <div class="card card-3"  style={{background : 'white', fontFamily : 'Fantasy'}}>
            <Card.Title className='button' style={{ fontFamily : 'Fantasy'}}><Card.Img  style={{ width : '8%'}}  src={images[img]} /> <br/>  {pokemon['name']['french']} <br/>  <button class="btn  btn--green" onClick={ () => {editPokemon() }}><FontAwesomeIcon icon={faPenToSquare} size="sm" /></button></Card.Title>
            <form id='formulaire' onSubmit={ e => {e.preventDefault(); putRequest() }} >
              <Container>
                <Row> 
                  <Col>
                    <div class="input-group">
                      <label style={{ textDecoration : 'underline'}}>Nom</label>
                      <input disabled class="input--style-3" type="text" name="Nom" onChange={(e) => {setNom(e.target.value );}} value={nom}/>
                    </div>
                  </Col>
                  <Col>
                    <div class="input-group">
                      <label style={{ textDecoration : 'underline'}}>HP</label>
                      <input disabled class="input--style-3" type="number" name="HP" onChange={(e) => {setHp(e.target.value );}} value={HP}/> 
                    </div>
                  </Col>
                  <Col>
                    <div class="input-group">
                      <label style={{ textDecoration : 'underline'}}>Vitesse</label>
                      <input disabled class="input--style-3" type="number" name="Vitesse" onChange={(e) => {setSpeed(e.target.value );}} value={Speed} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div class="input-group">
                      <label style={{ textDecoration : 'underline'}}>Attaque</label>
                      <input disabled class="input--style-3" type="number" name="Attaque" onChange={(e) => {setAttack(e.target.value );}} value={Attack}/>
                    </div>
                  </Col>
                  <Col>
                    <div class="input-group">
                      <label style={{ textDecoration : 'underline'}}>Defense</label>
                      <input disabled class="input--style-3" type="number" name="Defense" onChange={(e) => {setDefense(e.target.value );}} value={Defense} />
                    </div>
                  </Col>
                  <Col>
                    <div class="input-group">
                      <label style={{ textDecoration : 'underline'}}>Sp. Attaque</label>
                      <input disabled class="input--style-3" type="number" name="Sp.Attaque" onChange={(e) => {setSpAttack(e.target.value );}}  value={SpAttack} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div class="input-group">
                      <label style={{ textDecoration : 'underline'}}>Sp. Defense</label>
                      <input disabled class="input--style-3" type="number" name="Sp.Defense" onChange={(e) => {setSpDefense(e.target.value );}} value={SpDefense} />
                    </div>
                  </Col>  
                  <Col>
                                    <div class="input-group" >
                                    <label style={{ textDecoration : 'underline'}}>Type</label>
                                        <div style={{fontSize: '20px'}}>
                                            <Row>
                                                <Col>
                                                <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Ground" onChange={() => {addType('Ground');}} value="Ground"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Sol</label>
                                                    </div>
                                                    <div class="form-check "> 
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Fire" onChange={() => {addType('Fire');}} value="Fire"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Feu</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Rock" onChange={() => {addType('Rock');}} value="Rock"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Roche</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Normal" onChange={() => {addType('Normal');}} value="Normal"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Normal</label>
                                                    </div>
                                                    <div class="form-check test">
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Poison" onChange={() => {addType('Poison');}} value="Poison"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox1">Poison</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Bug" onChange={() => {addType('Bug');}} value="Bug"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Insecte</label>
                                                    </div>
                                                </Col>
                                                <Col>
                                                  <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Fairy" onChange={() => {addType('Fairy');}} value="Fairy"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Fée</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Water" onChange={() => {addType('Water');}} value="Water"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Eau</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Steel" onChange={() => {addType('Steel');}} value="Steel"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Acier</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Ice" onChange={() => {addType('Ice');}} value="Ice"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Glace</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Ghost" onChange={() => {addType('Ghost');}} value="Ghost"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Spectre</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Electric" onChange={() => {addType('Electric');}} value="Electric"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Electrique</label>
                                                    </div>
                                                </Col>
                                                <Col>
                                                  <div class="form-check ">
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Flying" onChange={() => {addType('Flying');}} value="Flying"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Vol</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Psychic" onChange={() => {addType('Psychic');}} value="Psychic"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Psy</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Grass" onChange={() => {addType('Grass');}} value="Grass"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Plante</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Fighting" onChange={() => {addType('Fighting');}} value="Fighting"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Combat</label>
                                                  </div>
                                                  <div class="form-check ">
                                                        <input class="form-check-input checkedColor" disabled type="checkbox" id="Dragon" onChange={() => {addType('Dragon');}} value="Dragon"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Dragon</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" disabled type="checkbox" id="Dark" onChange={() => {addType('Dark');}} value="Dark"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Ténèbres</label>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                </Row>
             
              
              </Container>
              <button class="btn btn--pill btn--green" id='sauvegarder'  style={{ display : 'none', fontFamily : 'Fantasy'}}  onClick={ () => {sauvegarderPokemon() }}>Enregistrer</button>
            </form>
          </div> 
        </div>
      </div>
    )
  }

    
}

export default PokemonFiche