import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import './itemDetail.css'


function ItemDetail(props) {
    const{addItem} = useContext(cartContext);

    const [addedToCart, setAddedToCart] = useState(false);

    function onAddToCart(count){
        setAddedToCart (count);
        addItem(props, count)

    }

    


        return(
        <div className="item-card-detail">
        <div className="item-card_header">
        <h4>{props.title}</h4>
        </div>
        <img className="foto" src={props.img} alt="imagen" />
        <h3 className="titulo-detalle">{props.category}</h3>
        <h3 className="titulo-detalle">Precio: ${props.price}</h3>
        <h5>{props.description}</h5>

        {addedToCart ? 
            <Link to="/cart"> <button> Ir al carrito </button> </Link> 
            : <ItemCount onAddToCart={onAddToCart} stock={props.stock}/>}

        </div>
        )

}

export default ItemDetail;