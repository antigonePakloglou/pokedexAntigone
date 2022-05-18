import {Card, Button} from 'react-bootstrap';
import PokemonFiche from './PokemonFiche';
import {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { getPokemonById } from './Service';


//recupération des images
function importAll(r) {
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

    return (
        <Router>
            <main>
                <Card style={{ width: '18rem' }}>
                    <Card.Img width="auto"  src={images[img]} />
                    <Card.Body>
                        <Card.Title>{name['french']}</Card.Title>
                        <Link to="/fiche">About</Link>
                    </Card.Body>
                </Card>
                <Routes>
                    <Route exact path="/fiche" element={<PokemonFiche id={id} />} />
                </Routes>
            </main>
        </Router>      
    )
}

export default Pokemon