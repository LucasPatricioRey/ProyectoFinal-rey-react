import './Item.css';
import{Link}from 'react-router-dom';
import Button from "../Button/Button";

export default function Item(props){

   return(
   
   <div className="item-card">

      <div className="item-card_header">
      <h4>{props.title}</h4>
      </div>

      <div className='item-card_img'>
      <img src={props.img} alt="imagen" />
      </div>

      <div>
      {props.offer && <h3 style = {{color:"red"}}> {props.offer}%</h3>}
      <h3>Precio $ {props.price}</h3>
      <small>{props.description}</small>
      </div>

      {props.stock === 0 && <small>No hay mas stock disponible</small> }
      
      { props.stock > 0 &&(
         <Link to={`/detalle/${props.id}`}>
         <Button> Ver Detalles</Button>
         </Link>
      )
      }
   </div>
   )
}