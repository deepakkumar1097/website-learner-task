import Button from "react-bootstrap/Button";
import React from "react";

function ButtonComp({ text, background, border }) {
  return (
    <Button
      style={{
        backgroundColor: { background },
        color: { border },
        border: { border },
      }}
    >
      {text}
    </Button>
  );
}

export default ButtonComp;
