import React, { useState } from "react";
import Button from "../Button/Button";

export default function ItemCount({onAddToCart}) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSubstract() {
    
    if(count > 1) {
      setCount(count - 1);
    }
    else {
      alert("La cantidad no puede ser 0")
    }
  }

  return (
    <div>
      <Button  onPress={handleSubstract}>
        -
      </Button>
      <span> {count} </span>
      <Button  onPress={handleAdd}>
        +
      </Button>
      <button onClick={() => onAddToCart(count)}>Agregar al carrito</button>
    </div>
  );
}
