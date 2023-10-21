import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

function CardComp({ image, title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <Card style={{ width: "18rem", borderRadius: "20px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{ marginBottom: "20px" }}>
        <Card.Title style={{ fontWeight: "600", color: "#2E3A5E" }}>
          {title}
        </Card.Title>
        <Card.Text>
          {content}

          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus.
            </div>
          </Collapse>
          <p
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            style={{ cursor: "pointer", color: "#2E3A5E", fontWeight: "600" }}
          >
            {open ? "See Less" : "See More"}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
