import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Boton from "../Boton/Boton"


import productsDatabase from "../../data/products";

function getSingleItem(idURL) {
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
    const itemRequested = productsDatabase.find((item) => {
        return item.id === parseInt(idURL);
    });
    resolve(itemRequested);
    }, 1000);
});

return promesa;
}


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    let { nombreid } = useParams();
    

useEffect(() => {
    getSingleItem(nombreid).then((respuesta) => {
    setProduct(respuesta);
    });
}, [nombreid]);



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
            <Boton></Boton>
        </div>
    </div>
    );
}

export default ItemDetailContainer;