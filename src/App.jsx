import "./App.css";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";


function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryid" element={ <ItemListContainer/> } />
        <Route path="/detalle/:nombreid" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<h1>Error 404 page not found</h1>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
