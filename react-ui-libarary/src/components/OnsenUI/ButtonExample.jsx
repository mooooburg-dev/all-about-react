import React from "react";
import { Button } from "react-onsenui";

export default function ButtonExample() {
  const handleClick = () => {
    alert("pressed");
  };

  return (
    <>
      <Button onClick={handleClick} modifier="large--cta">
        Tap Me
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} disabled={true}>
        disalbed
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="outline">
        outine
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="light">
        light
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="quiet">
        quiet
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="cta">
        cta
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="large-quite">
        large-quite
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material">
        material
      </Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material--flat">
        material--flat
      </Button>
    </>
  );
}
