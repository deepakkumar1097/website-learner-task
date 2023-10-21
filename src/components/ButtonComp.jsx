import Button from "react-bootstrap/Button";
import React from "react";

function ButtonComp({ text, background, border, color }) {
  return (
    <Button
      style={{
        backgroundColor: background,
        color: color,
        border: `1px solid ${border}`,
        fontWeight: 500,
        width: "150px",
        height: "50px",
      }}
    >
      {text}
    </Button>
  );
}

export default ButtonComp;
