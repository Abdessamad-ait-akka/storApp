import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Produits from "../pages/Products";
import Enregistrer from "../pages/Enregistrer";
import Login from "../pages/Login";
import Acheter from "../pages/Achat";

function Appp() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Accueil</h1>} />
                <Route path="/produits" element={<Produits />} />
                <Route path="/enregistrer" element={<Enregistrer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/achat" element={<Acheter />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Appp;
