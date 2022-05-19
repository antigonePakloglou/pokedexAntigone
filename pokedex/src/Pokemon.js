import {Card} from 'react-bootstrap';
import './createFormAssets/css/allPokemons.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



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

    return (
        
            <main style={{  padding: '2%'}}>
                <Card className='rounded ombre' style={{ width: '18rem', background : '#ffffff' }}>
                    <Card.Img width="auto"  src={images[img]} />
                    <Card.Body>
                    </Card.Body>
                    <Card.Title className='button' style={{ fontFamily : 'Fantasy'}}> <Link to={`/fiche/${id}`} style={{color : '#302E2E' }}>{name['french']}</Link></Card.Title>
                </Card>
               
            </main>
          
    )
}

export default Pokemon