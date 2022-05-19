//on genere un pokemon pour chage données dans le fichier db.json
import Pokemon from './Pokemon';
import {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';

const Pokemons = () => {
    //recupération données
    let [pokemons, setPokemons] = useState([])
    let [page, setPage] = useState(1)

    useEffect(() => {
        axios.get(`http://localhost:3004/pokemons?_page=${page}`)
        .then(resp => {
           setPokemons(resp.data);
           console.log('page', page);
       });
      }, []); 
    
        
    return (
        <div>
            <Container>
                <Row className='g-4'>
                {  pokemons.map((p)=> (
                        <Col>
                            <div  key={p.id} >
                                <Pokemon {...p} />
                            </div>
                        </Col>
                    )) } 
                </Row>
               
            </Container>
            <Button variant="outline-warning" onClick={() => setPage(page + 1 )}>Next</Button>
        </div>
        
    )
    
}

export default Pokemons