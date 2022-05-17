import {Card, Button} from 'react-bootstrap';

//recupération des images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
  

const Pokemon = ({id,name, type, vitesse}) => {
    

    let img;
    //concatenation du nom des images
    switch (id.toString().length) {
        case 1:
            img = '00'+id.toString()+'.png';  
        case 2:
            img = '0'+id.toString()+'.png';  
        case 3:
            img = id.toString()+'.png'; 
        default:
            img = '001.png';
    }

    return (
        
       <Card style={{ width: '18rem' }}>
            <Card.Img width="auto"  src={images[img]} />
            <Card.Body>
                <Card.Title>{name['french']}</Card.Title>
                <Button variant="primary">Voir plus</Button>
            </Card.Body>
        </Card> 
      
    )
}

export default Pokemon