// import './src/App.css';
import {BASE_URL} from "../tools/constante.js";
import Nav from "./Nav.jsx";
import {NavLink} from "react-router-dom";
import {useState, useContext, Fragment} from "react";
import {StoreContext} from "../tools/context.js"; 



const Header = () => {
    
    return (
        <Fragment>
            <header>
            	<div>
            	    <img src={`${BASE_URL}/image/mystery_1920.jpg`} alt="photo de forêt"/>
                   	<h1>Ficelles et Messages</h1>
                   	<img src={`${BASE_URL}/image/menu-btn32.png`} alt="menu burger" />
                   	<img src={`${BASE_URL}/image/livre-panier.png`} alt="menu panier" />
                </div>
    		  
    		</header>
    		<Nav /> 
        </Fragment>
        )
        
    
    
    
}











export default Header