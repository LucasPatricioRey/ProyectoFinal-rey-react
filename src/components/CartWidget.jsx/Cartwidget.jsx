import "./cartwidget.css"
import { useContext } from "react";
import{ cartContext} from "../../context/cartContext"
import {Link} from"react-router-dom"



 function CartWidget(props){

    const {totalItems} = useContext(cartContext);

    return(
        <Link to="/cart">
        <div className="carrito-numero"> 
            <img src={props.img} className="img-cart" alt="carrito"></img>
            <figcaption className="numero"> {totalItems()} </figcaption>
        </div>
        </Link>
    )
}

export default CartWidget;