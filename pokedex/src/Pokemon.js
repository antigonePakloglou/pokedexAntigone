import {Card, Button} from 'react-bootstrap';
const Pokemon = ({name, type, vitesse}) => {
  
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name['french']}</Card.Title>
                <Button variant="primary">Voir plus</Button>
            </Card.Body>
        </Card>
      
    )
}

export default Pokemon