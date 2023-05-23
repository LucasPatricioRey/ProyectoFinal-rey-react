import { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import "./cartContainer.css";
import { createOrder } from '../services/firestore';
import { useNavigate } from "react-router-dom";


function CartContainer() {
  const { cart, removeItem, clearCart } = useContext(cartContext);
  const navigate = useNavigate();

  const totalPriceInCart = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.count;
    }
    return totalPrice;
  };

  const totalItems = () => {
    let totalCount = 0;
    for (const item of cart) {
      totalCount += item.count;
    }
    return totalCount;
  };

  async function handleCheckout() {
    const order = {
      items: cart,
      buyer: { name: "Santiago Coder"},
      total: totalPriceInCart(),
      date: new Date(),
     
    }; 
console.log(handleCheckout);
    const orderId = await createOrder(order);
    navigate(`/checkout/${orderId}`);
    clearCart()
  }

  if (cart.length === 0)
    return (
      <div className="cart-container">
        <h1>Carrito Vacío</h1>
      </div>
    );

  return (
    <div>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Quitar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="background">
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.img} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>X</button>
              </td>
              <th>${item.count * item.price}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>Tienes un total de {totalItems()} items en tu carrito</h4>
        <h4>El total de tu compra es de ${totalPriceInCart()}</h4>
        <button onPress={handleCheckout}>Finalizar la compra </button>
      </div>
    </div>
  );
}

export default CartContainer;
