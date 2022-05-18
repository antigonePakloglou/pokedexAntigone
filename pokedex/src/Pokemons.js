//on genere un pokemon pour chage données dans le fichier db.json
import Pokemon from './Pokemon';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { getAllPokemons } from './Service';

const Pokemons = () => {
    //recupération données
    let [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getAllPokemons().then((data) => {
          setPokemons(data);
        });
      }, []);

    //TODO pagination
   
        
    return (
        <div>
            {/* map permet de boucler sur tout les elements d un tab 
            Pour chaque données du fichier on va appeler le composant <Pokemon/>
            */}
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