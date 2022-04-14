import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardColFour = ({item}) => {
  console.log(item)
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img
          variant="top"
          src={item?.img}
        />
        <Card.Body>
          <Card.Title>{item?.name}</Card.Title>
          <Card.Text>
           {item?.description}
          </Card.Text>
          <Link to={`${item?.id}`}>
                   <Button variant="primary">Booking Now</Button>
          </Link>
 
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardColFour;
