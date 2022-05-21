import {Card, Container, Row, Col} from 'react-bootstrap';
import './createFormAssets/css/allPokemons.css';
import {Link} from "react-router-dom";
import axios from 'axios';

import { faTrashCan, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//recupération des images
export function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));



const Pokemon = ({id,name}) => {
  
    let img;
    //concatenation du nom des images
    switch (id.toString().length) {
        case 1:
            img = '00'+id.toString()+'.png';  
            break;
        case 2:
            img = '0'+id.toString()+'.png';  
            break;
        case 3:
            img = id.toString()+'.png'; 
            break;
        default:
            img = '003.png';
    }

    function deleteRequest (){
        async function deletePokemon() {
            await axios.delete(`http://localhost:3004/pokemons/${id}`);
        }
        deletePokemon();
    }
    

    return (
        
            <main style={{  padding: '2%'}}>
                
                <Card className='rounded ombre' style={{ width: '18rem', background : '#ffffff' }}>
                    <Card.Img width="auto"  src={images[img]} />
                    <Card.Body>
                    </Card.Body>
                    <Card.Title className='button' style={{ fontFamily : 'Fantasy'}}> {name['french']}</Card.Title>
                    <Container>
                        <Row>
                            <Col>
                            <button class="btn btn--pill btn--green" onClick={ () => {deleteRequest() }}><FontAwesomeIcon icon={faTrashCan} size="sm" /></button>
                            <Link to={`/fiche/${id}`} style={{color : '#302E2E' }}><button class="btn btn--pill btn--green" type="submit"><FontAwesomeIcon icon={faEye} size="sm"/></button></Link> 
                            </Col>
                        </Row>
                    </Container>
                </Card>
               
            </main>
          
    )
}

export default Pokemon