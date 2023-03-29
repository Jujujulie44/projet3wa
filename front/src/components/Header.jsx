import Nav from "./Nav.jsx";
import {Fragment} from "react";

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

    // {state.user.isLogged === true && (
        //     <NavLink to="/Cart" onClick={() => setMobileMenuOpen(false)}><img className="panier" src={Panier} alt="panier" /></NavLink>
        // )}