import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./stor/components/navbar";
import Footer from "./stor/components/footer";
import Produits from "./stor/pages/Products";
import Enregistrer from "./stor/pages/Enregistrer";
import Login from "./stor/pages/Login";
import Acheter from "./stor/pages/Achat";
import ImageCard from "./stor/components/page";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<ImageCard/>} />
                <Route path="/produits" element={<><ImageCard/> <Produits /></>} />
                <Route path="/enregistrer" element={<Enregistrer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/achat" element={<Acheter />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
