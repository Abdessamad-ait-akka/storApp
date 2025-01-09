import { Link } from "react-router-dom";
import "../style/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>StorApp</h2>
                        <p>Votre source de produits tendance</p>
                    </div>
                    <div className="footer-links">
                        <h3>Liens utiles</h3>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/produits">Produits</Link></li>
                            <li><Link to="/enregistrer">Enregistrer</Link></li>
                            <li><Link to="/login">Connexion</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <p>Email: contact@storapp.com</p>
                        <p>Téléphone: +1 234 567 890</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 StorApp. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
