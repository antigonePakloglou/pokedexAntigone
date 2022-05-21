//on genere un pokemon pour chage données dans le fichier db.json
import Pokemon from './Pokemon';
import {useState, useEffect} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import './createFormAssets/css/main.css';
import axios from 'axios';

const PokemonCreate = () => {

    const [nom, setNom] = useState('')
    const [type, setType] = useState('')
    const [HP, setHp] = useState('')
    const [Attack, setAttack] = useState('')
    const [Defense, setDefense]  = useState('')
    const [SpAttack, setSpAttack] = useState('')
    const [SpDefense, setSpDefense] = useState('')
    const [Speed, setSpeed] = useState('')


    function postRequest (){
        async function addPokemon() {

            let data = { name: nom, type: type, base:{HP:parseInt(HP), Attack: parseInt(Attack), Defense: parseInt(Defense), 'Sp. Attack': parseInt(SpAttack), 'Sp. Defense': parseInt(SpDefense), Speed: parseInt(Speed)} };
        
            await axios.post('http://localhost:3004/pokemons', data);
        
        }
        addPokemon();
    }
   
        
    return (
    
        <div class="page-wrapper bg p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3" style={{background : 'white'}}>
                <div class="card-heading"></div>
                <div class="card-body">
                <Card.Title className='button' style={{ fontFamily : 'Fantasy'}}>Créer son pokémon</Card.Title>
                  
                    <form onSubmit={ e => {e.preventDefault(); postRequest() }}>
                    <div class="input-group">
                    <label style={{ textDecoration : 'underline'}}>Nom</label>
                            <input class="input--style-3" type="text" name="Nom" onChange={(e) => {setNom(e.target.value );}} value={nom}/>
                        </div>
                       {/*  <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Type" name="Type" onChange={(e) => {setType(e.target.value );}} value={type}/>
                        </div> */}
                        <Container>
                            <Row> 
                                <Col>
                                    <div class="input-group">
                                        <div class="rs-select2 js-select-simple select--no-search">
                                            <select name="Type" >
                                                <option disabled="disabled" onChange={(e) => {setType(e.target.value );}} >Type</option>
                                                <option value="Feu">Feu</option>
                                                <option value="Eau">Eau</option>
                                                <option value="Acier">Acier</option>
                                            </select>
                                            <div class="select-dropdown"></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                    <label style={{ textDecoration : 'underline'}}>HP</label>
                                        <input class="input--style-3" type="text" name="HP" onChange={(e) => {setHp(e.target.value );}} value={HP}/> 
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                    <label style={{ textDecoration : 'underline'}}>Attaque</label>
                                        <input class="input--style-3" type="text" name="Attaque" onChange={(e) => {setAttack(e.target.value );}} value={Attack}/>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                    <label style={{ textDecoration : 'underline'}}>Défense</label>
                                        <input class="input--style-3" type="text" name="Defense" onChange={(e) => {setDefense(e.target.value );}} value={Defense} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div class="input-group">
                                    <label style={{ textDecoration : 'underline'}}>Sp.Attaque</label>
                                        <input class="input--style-3" type="text" name="Sp.Attaque" onChange={(e) => {setSpAttack(e.target.value );}} value={SpAttack} />
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group">
                                    <label style={{ textDecoration : 'underline'}}>Sp.Defense</label>
                                        <input class="input--style-3" type="text" name="Sp.Defense" onChange={(e) => {setSpDefense(e.target.value );}} value={SpDefense} />
                                    </div>
                                    <div class="input-group">
                                    <label style={{ textDecoration : 'underline'}}>Vitesse</label>
                                        <input class="input--style-3" type="text" name="Vitesse" onChange={(e) => {setSpeed(e.target.value );}} value={Speed} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div class="p-t-10">
                            <button class="btn btn--pill btn--green" type="submit">Créer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 
    )
    
}

export default PokemonCreate