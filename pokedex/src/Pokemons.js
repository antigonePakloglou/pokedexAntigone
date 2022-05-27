//on genere un pokemon pour chage données dans le fichier db.json
import Pokemon from './Pokemon';
import {useState, useEffect} from 'react';
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';
import { faCaretSquareLeft, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Pokemons = () => {
    //recupération données
    let [pokemons, setPokemons] = useState([])
    let [pokToSearch, setPokToSearch] = useState('')
    let [url, setUrl] = useState(`http://localhost:3004/pokemons`)
    let [page, setPage] = useState(1)

    useEffect(() => {
        if(pokToSearch == null){
            setUrl(url+`/?_page=1&_limit=12`);
        } else{
            setUrl(url+`?name.french=${pokToSearch}`);
           
        }
        axios.get(url)
        .then(resp => {
           setPokemons(resp.data);
       });
      }, [page]); 
    
      function previous(){
        if(page == 1){
            setPage(1)
        } else{
            setPage(page - 1)
        }
        
    }    


    function chercherPokemon (){
        setPokToSearch(document.getElementById('search').value);
        axios.get(`http://localhost:3004/pokemons?name.french=${pokToSearch}?_page=${page}&_limit=12`)
        .then(resp => {
           setPokemons(resp.data);
       });

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
           {page > 1 && <FontAwesomeIcon style={{color : 'black'}}  onClick={() => previous()} icon={faCaretSquareLeft} size="xl" />} {page > 1 && <span style={{fontFamily : 'Fantasy'}} >{page}</span>} <FontAwesomeIcon style={{color : 'black'}} onClick={() => setPage(page + 1 )} icon={faCaretSquareRight} size="xl" />
        </div>
        
    )
    
}

export default Pokemons