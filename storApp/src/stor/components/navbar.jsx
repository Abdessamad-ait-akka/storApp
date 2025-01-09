import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';  // Import the cart icon

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow p-4 ">
            <a className="navbar-brand text-warning" href="#">StorApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto ">
                    <li className="nav-item active ">
                        <Link to="/" className="nav-link text-white">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/produits" className="nav-link text-white">Produits</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/enregistrer" className="nav-link text-white">Enregistrer</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link text-white">Connexion</Link>
                    </li>
                </ul>
                <div>    <FaShoppingCart  style={{fontSize:30}}/></div>
            </div>
        </nav>
    );
}

export default Navbar;
