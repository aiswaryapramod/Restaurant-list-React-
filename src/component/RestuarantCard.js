import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function RestuarantCard({restuarant}) {
  return (
    <Link style={{textDecoration:"none",color:"white"}} to={`ViewRestuarant/${restuarant.id}`}>
         <Card className='m-2'>
      <Card.Img variant="top" className='p-3' src={restuarant.photograph} />
      <Card.Body>
        <Card.Title>{restuarant.name}</Card.Title>
        <Card.Text>
            {restuarant.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default RestuarantCard