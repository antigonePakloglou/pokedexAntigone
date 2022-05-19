//on genere un pokemon pour chage données dans le fichier db.json
import Pokemon from './Pokemon';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

const Pokemons = () => {
    //recupération données
    let [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/pokemons?_limit=12')
        .then(resp => {
           setPokemons(resp.data);
       });
      }, []); 
    

    //TODO pagination
   
        
    return (
        <div>
            <Container>
                <Row>
                {  pokemons.map((p)=> (
                        <Col>
                            <div  key={p.id} >
                                <Pokemon {...p} />
                                <hr/>
                            </div>
                        </Col>
                    )) } 
                </Row>
               
            </Container>
        </div>
    )
    
}

export default Pokemons