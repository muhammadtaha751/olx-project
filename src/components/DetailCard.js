import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function DetailCard(props) {
    const navigate = useNavigate()
   
    const {title,price,description } = props.data
   
  return (
    <div onClick={()=>navigate('/addetail')}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.olx.com.pk/thumbnails/408006277-800x600.webp" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {price}
        </Card.Text>
        <Card.Text>
       {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default DetailCard;