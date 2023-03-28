import { useState } from "react";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton"
export default function Item(props) {
  
  return (
    
    <div id={props.id} className="item-card">
      <Link to={`/detalle/${props.id}`}>
        <div className="item-card_header">
          <h2>{props.title}</h2>
        </div>
        <div className="item-card_img">
          <img src={props.img} alt="imagen"></img>
        </div>
        
        <div className="item-card_detail">
          <h4>$ {props.price}</h4>
          <small>{props.category}</small>
          <h5>Stock disponible:{props.stock}</h5>
        </div>
        <button>Ver detalle</button>
      </Link>
      <Boton></Boton>
    </div>
  );
}