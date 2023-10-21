import React from "react";
import Card from "react-bootstrap/Card";

function CardComp({ image, title, content }) {
  return (
    <Card style={{ width: "18rem", borderRadius: "20px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{ marginBottom: "20px" }}>
        <Card.Title style={{ fontWeight: "600", color: "#2E3A5E" }}>
          {title}
        </Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
