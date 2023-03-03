
// import menuBtn32 from "../image/menu-btn32.png";
// import livrePanier from "../image/livre-panier.png";
// import {BASE_URL} from "../tools/constante.js";
import Nav from "./Nav.jsx";
// import {NavLink} from "react-router-dom";
import {Fragment} from "react";
// import {StoreContext} from "../tools/context.js"; 



const Header = () => {
    
    return (
        <Fragment>
        
            <header>
            	<div className="logo" >
                   	<h1>Ficelles et Messages</h1>
                </div>
                <Nav />
    		</header>
    		 
        </Fragment>
        )
}

// <img className="menu-burger"src={menuBtn32} alt="menu burger" />
// <img className="livre-panier" src={livrePanier} alt="livre panier" />










export default Header