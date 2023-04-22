import React from "react";
import Card from "react-bootstrap/Card";

const MenuItem = (props) => {
  // console.log(props);
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title style={{ cursor: "pointer" }} onClick={props.DishSelect}>
            {props.dish.name}
          </Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <p>
            <b>Price: {props.dish.price}</b>
          </p>
          <p>
            <b>Label: {props.dish.label}</b>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuItem;
