import {Card, Button} from 'react-bootstrap';
const Pokemon = ({id,name, type, vitesse}) => {
    console.log(id.toString().length);

    let img;
    switch (id.toString().length) {
        case 1:
            img = 'src/img/00'+id.toString()+'.png';
            console.log(img);
            break;
        case 2:
            img = 'src/img/0'+id.toString()+'.png';
            console.log(img);
        case 3:
            img = 'src/img/'+id.toString()+'.png';
            console.log(img);
            break;
        default:
            img = 'src/img/001.png';
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='img\001.png' />
            <Card.Body>
                <Card.Title>{name['french']}</Card.Title>
                <Button variant="primary">Voir plus</Button>
            </Card.Body>
        </Card>
      
    )
}

export default Pokemon