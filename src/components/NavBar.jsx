import { Link } from "react-router-dom";

function NavBar(){
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
                    <li>
                        <a  href="#">
                            <i className="bi bi-cart-fill"></i> Carrito 0
                        </a>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar;
