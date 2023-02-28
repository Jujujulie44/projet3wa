// import './src/App.css';
import menuBtn32 from "../image/menu-btn32.png";
import livrePanier from "../image/livre-panier.png";
import {BASE_URL} from "../tools/constante.js";
import Nav from "./Nav.jsx";
import {NavLink} from "react-router-dom";
import {useState, useContext, Fragment} from "react";
import {StoreContext} from "../tools/context.js"; 



const Header = () => {
    
    return (
        <Fragment>
            <header>
            	<div className="logo" >
                   	<h1>Ficelles et Messages</h1>
                   	<img src={menuBtn32} alt="menu burger" />
                   	<img src={livrePanier} alt="menu panier" />
                </div>
    		</header>
    		<Nav /> 
        </Fragment>
        )
        
    
    
    
}











export default Header