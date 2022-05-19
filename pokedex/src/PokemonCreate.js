//on genere un pokemon pour chage données dans le fichier db.json
import Pokemon from './Pokemon';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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
      
       /*  <div>
          
           
          {   <form onSubmit={ e => {e.preventDefault(); postRequest() }}>
            <h2>Créer un pokemon</h2>
        
            <div>
                <label htmlFor="nom">Nom : </label>
                <input type="text" name="nom" id="nom" onChange={(e) =>{setNom(e.target.value );}} value={nom} />
            </div>
            <div>
                <label htmlFor="type">Type : </label>
                <input type="text" name="type" id="type" onChange={(e) => {setType(e.target.value );}} value={type} />
            </div>
            <div>
                <label htmlFor="create-base">Base : </label>

                <input type="number" name="create-type" id="create-type"  onChange={(e) => {setHp(e.target.value );}} value={HP} />
                <input type="number" name="create-type" id="create-type"  onChange={(e) => {setAttack(e.target.value );}} value={Attack} />
                <input type="number" name="create-type" id="create-type"  onChange={(e) => {setDefense(e.target.value );}} value={Defense} />
                <input type="number" name="create-type" id="create-type"  onChange={(e) => {setSpAttack(e.target.value );}} value={SpAttack} />
                <input type="number" name="create-type" id="create-type"  onChange={(e) => {setSpDefense(e.target.value );}} value={SpDefense} />
                <input type="number" name="create-type" id="create-type"  onChange={(e) => {setSpeed(e.target.value );}} value={Speed} />
               
               
            </div>
            <input type="submit" value="Create" />
            
    </form> }
        </div> */

        <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Créer son pokémon</h2>
                    <form method="POST">
                    <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Nom" name="Nom" onChange={(e) => {setNom(e.target.value );}} value={nom}/>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Type" name="Type" onChange={(e) => {setType(e.target.value );}} value={type}/>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="HP" name="HP" onChange={(e) => {setHp(e.target.value );}} value={HP}/>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Attaque" name="Attaque" onChange={(e) => {setAttack(e.target.value );}} value={Attack}/>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Defense" name="Defense" onChange={(e) => {setDefense(e.target.value );}} value={Defense} />
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Sp.Attaque" name="Sp.Attaque" onChange={(e) => {setSpAttack(e.target.value );}} value={SpAttack} />
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Sp.Defense" name="Sp.Defense" onChange={(e) => {setSpDefense(e.target.value );}} value={SpDefense} />
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="Vitesse" name="Vitesse" onChange={(e) => {setSpeed(e.target.value );}} value={Speed} />
                        </div>
                        
                        <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                                <select name="gender">
                                    <option disabled="disabled" selected="selected">Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                                <div class="select-dropdown"></div>
                            </div>
                        </div>
                       
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