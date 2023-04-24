import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
function NavBar(){
    const { cart } = useContext(cartContext);
    return(
            <nav className="wrapper">
                <Link to="/"><h1 className="logo">TKL Farmacia</h1></Link>
                <ul className="menu">
                    <Link to="/">
                    <li>
                    Todos los productos
                    </li>
                    </Link>
                    <Link to="/category/Actron">
                    <li>
                    Actron
                    </li>
                    </Link>
                    <Link to="/category/Ibu">
                    <li>
                    Ibu
                    </li>
                    </Link>
                    <Link to="/category/Ibupirac">
                    <li>
                    Ibupirac
                    </li>
                    </Link>
                    
                    <Link to="/cart">
                    <li>
                        
                            <i className="bi bi-cart-fill"></i>
                        
                        <span className="cartWidget_count"> Carrito {cart.length}</span>
                    </li>
                    </Link>
                </ul>
            </nav>
    )
}

export default NavBar;
