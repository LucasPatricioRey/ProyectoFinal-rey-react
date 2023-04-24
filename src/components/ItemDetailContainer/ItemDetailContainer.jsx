import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import Loader from "../Loader/Loader";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { getSingleItem } from "../../services/firestore";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);
    let { nombreid } = useParams();

    const { cart, addItem } = useContext(cartContext);
    

useEffect(() => {
    getSingleItem(nombreid).then((respuesta) => {
    setProduct(respuesta);
    });
}, [nombreid]);



function onAddToCart(count) {
    addItem(product, count);
    
  }


  if (product.length === 0) {
    return <Flex><Loader/></Flex>
  }


return (
    <div className="Contenedor">
        <img src={product.img}></img>
        <div className="Contenedor-detail">
            <h1>{product.title}</h1>
            <h3>{product.category}</h3>
            <p>Precio: ${product.price}</p>
            <p>Stock disponible: {product.stock}</p>
            <p>Información del producto :
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis consequatur assumenda? Fugiat dicta vel earum! Facilis consectetur, a quas possimus praesentium iste doloribus, voluptas perferendis debitis atque numquam distinctio!</p>
                
                <ItemCount onAddToCart={onAddToCart} />
                <Link to={`/detalle/${product.id - 1}`}>
                    <Button>Anterior</Button>
                </Link>
                <Link to={`/detalle/${product.id + 1}`}>
                    <Button>Siguiente</Button>
                </Link>
        </div>
    </div>
    );
}

export default ItemDetailContainer;