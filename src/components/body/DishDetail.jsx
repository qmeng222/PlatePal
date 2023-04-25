import React from "react";
import Card from "react-bootstrap/Card";
import DishComment from "./DishComment";

const DishDetail = (props) => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title>{props.dish.name}</Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <p>
            <b>Price: {props.dish.price}</b>
          </p>
          <p>
            <b>Label: {props.dish.label}</b>
          </p>
          <p>
            <b>Category: {props.dish.category}</b>
          </p>

          <hr></hr>
        </Card.Body>
        <DishComment comments={props.comments} />
      </Card>
    </div>
  );
};

export default DishDetail;
