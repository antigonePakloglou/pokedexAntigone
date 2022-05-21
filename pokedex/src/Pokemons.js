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
        axios.get(`http://localhost:3004/pokemons?_page=${page}&_limit=12`)
        .then(resp => {
           setPokemons(resp.data);
           console.log('page', page);
       });
      }, [page]); 
    
      function previous(){
        if(page == 1){
            setPage(1)
        } else{
            setPage(page - 1)
        }
        
    }    
    return (
        <div>
            <Container>
                <Row className='g-4'>
                {  pokemons.map((p)=> (
                        <Col key={p.id}>
                          
                                <Pokemon  {...p} />
                           
                        </Col>
                    )) } 
                </Row>
               
            </Container>
           {page > 1 && <Button style={{background : 'black'}} onClick={() => previous()}>PREV</Button>}  <Button style={{background : 'black'}} onClick={() => setPage(page + 1 )}>NEXT</Button>
        </div>
        
    )
    
}

export default Pokemons