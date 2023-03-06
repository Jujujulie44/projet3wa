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









export default Header