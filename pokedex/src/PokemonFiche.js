import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {useState, useEffect, useRef} from 'react';
import './createFormAssets/css/unique.css';
import {useParams} from "react-router-dom";
import {importImages, concatImgName} from './fonctions';

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PokemonFiche = () => {
    //recupération données d'un pokémon
    let [pokemon, setPokemon] = useState([]);
    const [nom, setNom] = useState()
    const [type, setType] = useState()
    const [HP, setHp] = useState('')
    const [Attack, setAttack] = useState()
    const [Defense, setDefense]  = useState()
    const [SpAttack, setSpAttack] = useState()
    const [SpDefense, setSpDefense] = useState()
    const [Speed, setSpeed] = useState()
    const { id } = useParams();
  

    //recupération des images
    const images = importImages(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    let img = concatImgName(id);



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
      var fields = document.getElementsByTagName('input');
      for(var i = 0; i < fields.length; i++)
      {
          fields[i].disabled = false;
          fields[i].style.background = '#FFF4F4';
      }
      document.getElementById("sauvegarder").style.display = 'block';
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

        let data = { name: nom, type: type, base:{HP:parseInt(HP), Attack: parseInt(Attack), Defense: parseInt(Defense), 'Sp. Attack': parseInt(SpAttack), 'Sp. Defense': parseInt(SpDefense), Speed: parseInt(Speed)} };
    
        await axios.put(`http://localhost:3004/pokemons/${id}`, data);
    
    }
    updatePokemon();
  }

  function setForm(){
    setNom(pokemon['name']['french']);
     setHp(pokemon['base']['HP']);
     setAttack(pokemon['base']['Attack']);
     setDefense(pokemon['base']['Defense']);
     setSpAttack(pokemon['base']['Sp. Attack']);
     setSpDefense(pokemon['base']['Sp. Defense']);
     setSpeed(pokemon['base']['Speed']);
  }


  if(pokemon.length != 0) {
    
    return(
      <div class="page-wrapper bg p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w960">
          <div class="card card-3"  style={{background : 'white', fontFamily : 'Fantasy'}}>
         
            <div class="card-heading"></div>
            
            <div class="card-body"></div>
            
            <Card.Title className='button' style={{ fontFamily : 'Fantasy'}}><Card.Img  style={{ width : '7%'}}  src={images[img]} /> <br/>  {pokemon['name']['french']} <br/>  <button class="btn  btn--green" onClick={ () => {editPokemon() }}><FontAwesomeIcon icon={faPenToSquare} size="sm" /></button></Card.Title>

              <form id='formulaire' onLoad={()=> setForm()} onSubmit={ e => {e.preventDefault(); putRequest() }} >
             
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
                            <input disabled class="input--style-3" type="text" name="HP" onChange={(e) => {setHp(e.target.value );}} value={HP}/> 
                        </div>
                    </Col>
                    <Col>
                    <div class="input-group">
                        <label style={{ textDecoration : 'underline'}}>Vitesse</label>
                            <input disabled class="input--style-3" type="text" name="Vitesse" onChange={(e) => {setSpeed(e.target.value );}} value={Speed} />
                    </div>
                  
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                        <div class="input-group">
                        <label style={{ textDecoration : 'underline'}}>Attaque</label>
                            <input disabled class="input--style-3" type="text" name="Attaque" onChange={(e) => {setAttack(e.target.value );}} value={Attack}/>
                        </div>
                    </Col>
                    <Col>
                        <div class="input-group">
                        <label style={{ textDecoration : 'underline'}}>Defense</label>
                            <input disabled class="input--style-3" type="text" name="Defense" onChange={(e) => {setDefense(e.target.value );}} value={Defense} />
                        </div>
                    </Col>
                    <Col>
                        <div class="input-group">
                        <label style={{ textDecoration : 'underline'}}>Sp. Attaque</label>
                            <input disabled class="input--style-3" type="text" name="Sp.Attaque" onChange={(e) => {setSpAttack(e.target.value );}}  value={SpDefense} />
                        </div>
                    </Col>
                  </Row>
                  <Row>
                   
                    <Col>
                        <div class="input-group">
                        <label style={{ textDecoration : 'underline'}}>Sp. Defense</label>
                            <input disabled class="input--style-3" type="text" name="Sp.Defense" onChange={(e) => {setSpDefense(e.target.value );}} value={SpDefense} />
                        </div>
                    </Col>
                       
                  </Row>
                </Container>
                <div class="p-t-10">
                    <button class="btn btn--pill btn--green" id='sauvegarder'  style={{ display : 'none'}}  onClick={ () => {sauvegarderPokemon() }}>Enregistrer</button>
                </div>
              </form>
            </div> 
        </div>
      </div>
    )
  }

    
}

export default PokemonFiche