import { useState, useEffect } from "react";
import "../style/styleStor.css"; // Importer le fichier de styles
import { Link } from "react-router-dom"; // Utilisation de React Router pour la navigation

function Produits() {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) { 
                    throw new Error("Erreur lors du chargement des produits");
                }
                return response.json();
            })
            .then((data) => {
                setList(data);
                setFilteredList(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);
  
    const filterProducts = (category) => {
        if (category === "all") {
            setFilteredList(list);
        } else {
            const filtered = list.filter((item) => item.category === category);
            setFilteredList(filtered);
        }
    };
  
    if (loading) {
        return <h2 className="text-center mt-5">Chargement des produits...</h2>;
    }
  
    if (error) {
        return <h2 className="text-center text-danger mt-5">{error}</h2>;
    }
  
    return (
        <>
        <h1 style={{textAlign:'center',color:'green'}}>Nos Produits</h1>
            <div className="buttons">
                <button className="btn btn-primary m-4" onClick={() => filterProducts("men's clothing")}>Vêtements Homme</button>
                <button className="btn btn-primary m-4" onClick={() => filterProducts("women's clothing")}>Vêtements Femme</button>
                <button className="btn btn-primary m-4" onClick={() => filterProducts("jewelery")}>Accessoires</button>
                <button className="btn btn-primary m-4" onClick={() => filterProducts("electronics")}>Électroniques</button>
                <button className="btn btn-primary m-4" onClick={() => filterProducts("all")}>Tous</button>
            </div>
  
            <div className="container mt-5">
                <div className="row">
                    {filteredList.map((element) => (
                        <div className="col-md-4" key={element.id}>
                            <div className="card m-2 cardproduct">
                                <div className="card-body d-flex flex-column align-items-center text-center">
                                    <div className="img mb-3">
                                        <img src={element.image} alt={element.title} width="150px" height="130px" />
                                    </div>
                                    <div className="card-title">
                                        <h5>{element.title}</h5>
                                        <h6 className="text-success">{element.price} $</h6>
                                    </div>
                                    <button className="btn btn-warning mt-auto">
                                        <Link to="/achat" state={{ product: element }} className="text-decoration-none text-dark">Acheter</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Produits;
