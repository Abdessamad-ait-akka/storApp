import { useLocation } from "react-router-dom";
import { useState } from "react";

const Acheter = () => {
    const location = useLocation();
    const product = location.state?.product; // Récupérer le produit passé via state
  
    if (!product) {
        return <h3 className="text-center">Produit introuvable</h3>;
    }
  
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const confirmPurchase = () => {
        alert(`Vous avez acheté ${quantity} ${product.title}(s) pour ${quantity * product.price} $`);
    };

    return (
        <div className="text-center cardachat">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="200px" />
            <p>{product.description}</p>
            <h4 className="text-success">{product.price} $</h4>

            <div className="quantity-control">
                <button 
                    className="btn btn-secondary"
                    onClick={decrementQuantity}
                >
                    -
                </button>
                <span className="mx-3">{quantity}</span>
                <button 
                    className="btn btn-secondary"
                    onClick={incrementQuantity}
                >
                    +
                </button>
            </div>

            <button className="btn btn-primary mt-4" onClick={confirmPurchase}>
                Confirmer l'achat
            </button>
        </div>
    );
};

export default Acheter;
