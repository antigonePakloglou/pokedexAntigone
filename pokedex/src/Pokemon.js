import {Card} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



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
        
            <main>
                <Card style={{ width: '18rem', background : '#383f66' }}>
                    <Card.Img width="auto"  src={images[img]} />
                    <Card.Body>
                        <Card.Title>{name['french']}</Card.Title>
                        <Link to="/fiche">Voir fiche</Link>
                    </Card.Body>
                </Card>
               
            </main>
          
    )
}

export default Pokemon