import React from 'react';
import './checkout.css'
import { useParams } from 'react-router-dom';

function Checkout() {

  const orderId = useParams().orderId; 

  return (
    <div> 
      <h1 className='text'> Gracias por tu compra </h1> 
      <h3 className='text'> Tu ticket es : {orderId} </h3>
    </div>

  )
}

export default Checkout;