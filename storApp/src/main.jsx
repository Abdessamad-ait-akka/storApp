import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './stor/components/navbar.jsx'
import Login from './stor/pages/Login.jsx'
import Acheter from './stor/pages/Achat.jsx'
import Produits from './stor/pages/Products.jsx'
import Appp from './stor/pages/App.jsx'
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App/>
   </BrowserRouter>
)
