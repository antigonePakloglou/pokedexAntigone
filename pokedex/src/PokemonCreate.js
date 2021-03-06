import {useNavigate } from "react-router-dom";
import {useState} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import './createFormAssets/css/main.css';
import axios from 'axios';

const PokemonCreate = () => {

    const [nom, setNom] = useState('')
    const [HP, setHp] = useState('')
    const [Attack, setAttack] = useState('')
    const [Defense, setDefense]  = useState('')
    const [SpAttack, setSpAttack] = useState('')
    const [SpDefense, setSpDefense] = useState('')
    const [Speed, setSpeed] = useState('')
    let listTypes = [];
    let navigate = useNavigate()

    function postRequest (){
        
        async function addPokemon() {
            let data = { name:{french: nom} , type: listTypes, base:{HP:parseInt(HP), Attack: parseInt(Attack), Defense: parseInt(Defense), 'Sp. Attack': parseInt(SpAttack), 'Sp. Defense': parseInt(SpDefense), Speed: parseInt(Speed)} };
        
            await axios.post('http://localhost:3004/pokemons', data);
            navigate('/');
        
        }
        addPokemon();
       
       
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
   
        
    return(
        <div class="page-wrapper bg p-t-180 p-b-100 font-poppins">
            <div class="wrapper wrapper--w960">
                <div class="card card-3"  style={{background : 'white', fontFamily : 'Fantasy'}}>
                    <Card.Title className='button' style={{ fontFamily : 'Fantasy', fontSize : '28px'}}>Créer un pokémon</Card.Title>
                    <form id='formulaire' onSubmit={ e => {e.preventDefault(); postRequest() }} >
                        <Container>
                            <Row> 
                                <Col>
                                    <div class="input-group">
                                        <label style={{ textDecoration : 'underline'}}>Nom</label>
                                        <input class="input--style-3" style={{background : '#FFF4F4'}} type="text" name="Nom" onChange={(e) => {setNom(e.target.value );}} value={nom}/>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <label style={{ textDecoration : 'underline'}}>HP</label>
                                        <input class="input--style-3" style={{background : '#FFF4F4'}} type="number" name="HP" onChange={(e) => {setHp(e.target.value );}} value={HP}/> 
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <label style={{ textDecoration : 'underline'}}>Vitesse</label>
                                        <input class="input--style-3" style={{background : '#FFF4F4'}} type="number" name="Vitesse" onChange={(e) => {setSpeed(e.target.value );}} value={Speed} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                        <label style={{ textDecoration : 'underline'}}>Attaque</label>
                                        <input class="input--style-3" style={{background : '#FFF4F4'}} type="number" name="Attaque" onChange={(e) => {setAttack(e.target.value );}} value={Attack}/>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <label style={{ textDecoration : 'underline'}}>Defense</label>
                                        <input class="input--style-3" style={{background : '#FFF4F4'}} type="number" name="Defense" onChange={(e) => {setDefense(e.target.value );}} value={Defense} />
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                        <label style={{ textDecoration : 'underline'}}>Sp. Attaque</label>
                                        <input class="input--style-3" style={{background : '#FFF4F4'}} type="number" name="Sp.Attaque" onChange={(e) => {setSpAttack(e.target.value );}}  value={SpAttack} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <div class="input-group">
                                        <label style={{ textDecoration : 'underline'}}>Sp. Defense</label>
                                        <input class="input--style-3" style={{background : '#FFF4F4'}} type="number" name="Sp.Defense" onChange={(e) => {setSpDefense(e.target.value );}} value={SpDefense} />
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group" >
                                    <label style={{ textDecoration : 'underline'}}>Type</label>
                                        <div style={{background : '#FFF4F4', fontSize : '20px'}}>
                                            <Row>
                                                 <Col>
                                                <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Ground" onChange={() => {addType('Ground');}} value="Ground"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Sol</label>
                                                    </div>
                                                    <div class="form-check "> 
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Fire" onChange={() => {addType('Fire');}} value="Fire"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Feu</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Rock" onChange={() => {addType('Rock');}} value="Rock"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Roche</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Normal" onChange={() => {addType('Normal');}} value="Normal"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Normal</label>
                                                    </div>
                                                    <div class="form-check test">
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Poison" onChange={() => {addType('Poison');}} value="Poison"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox1">Poison</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Bug" onChange={() => {addType('Bug');}} value="Bug"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Insecte</label>
                                                    </div>
                                                </Col>
                                                <Col>
                                                  <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Fairy" onChange={() => {addType('Fairy');}} value="Fairy"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Fée</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Water" onChange={() => {addType('Water');}} value="Water"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Eau</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Steel" onChange={() => {addType('Steel');}} value="Steel"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Acier</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Ice" onChange={() => {addType('Ice');}} value="Ice"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Glace</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Ghost" onChange={() => {addType('Ghost');}} value="Ghost"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Spectre</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Electric" onChange={() => {addType('Electric');}} value="Electric"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Electrique</label>
                                                    </div>
                                                </Col>
                                                <Col>
                                                  <div class="form-check ">
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Flying" onChange={() => {addType('Flying');}} value="Flying"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Vol</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Psychic" onChange={() => {addType('Psychic');}} value="Psychic"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Psy</label>
                                                    </div>
                                                    <div class="form-check ">
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Grass" onChange={() => {addType('Grass');}} value="Grass"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Plante</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Fighting" onChange={() => {addType('Fighting');}} value="Fighting"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Combat</label>
                                                  </div>
                                                  <div class="form-check ">
                                                        <input class="form-check-input checkedColor" type="checkbox" id="Dragon" onChange={() => {addType('Dragon');}} value="Dragon"/>
                                                        <label class="form-check-label labelOpacity" for="inlineCheckbox2">Dragon</label>
                                                    </div>
                                                    <div class="form-check ">
                                                      <input class="form-check-input checkedColor" type="checkbox" id="Dark" onChange={() => {addType('Dark');}} value="Dark"/>
                                                      <label class="form-check-label labelOpacity" for="inlineCheckbox2">Ténèbres</label>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div class="p-t-10">
                            <button class="btn btn--pill btn--green"  style={{fontFamily : 'Fantasy' }} id='sauvegarder'> Valider </button>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    )
    
    
}

export default PokemonCreate