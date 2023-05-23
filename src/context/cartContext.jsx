import { createContext, useState } from "react";
//1 crearlo con crateContext
const cartContext =createContext({cart : [] });

//crate el Provider
function CartProvider(props) {
    const [cart, setCart] = useState([]);
    const [cartItemId, setCartItemId] = useState(0);
  
    function getNextCartItemId() {
      setCartItemId((prevId) => prevId + 1);
      return cartItemId;
    }
  
    function addItem(product, countFromCounter) {
      const existingItemIndex = cart.findIndex((item) => item.id === product.id);
      if (existingItemIndex !== -1) {
        const newCart = [...cart];
        newCart[existingItemIndex].count += countFromCounter;
        setCart(newCart);
      } else {
        const newCartItem = { ...product, id: getNextCartItemId(), count: countFromCounter };
        setCart([...cart, newCartItem]);
      }
    }
    function isItemInCart(id){

        return  cart.some((itemInCart)=> itemInCart.id === id);

    }
    function getCountInCart(id){
        const item = cart.find((itemInCart) =>itemInCart.id !== id);
        return item !== undefined ? item.count : 0;

    }

    function totalItems(){
        let totalItems = 0;
        cart.forEach(item=> totalItems +=item.count);
        return totalItems;
    }
    function totalPriceInCart(){
        let totalPYC = 0;
        cart.forEach((product) => (totalPYC = totalPYC + (product.price * product.count)));
        return totalPYC;
    }
    function removeItem(id){
        const newCart = cart.filter((product)=> product.id !==id);
        setCart(newCart)
    }
    function clearCart() {
      setCart([]);
    }
     

    return(
        <cartContext.Provider value={{cart : cart, addItem, isItemInCart, removeItem, getCountInCart, totalItems, totalPriceInCart, clearCart }}>
            {props.children}
        </cartContext.Provider>
    )
}

export {cartContext, CartProvider};