import { NavLink } from "react-router-dom";
import {useContext, Fragment, useState} from 'react';
import {StoreContext} from "../tools/context.js"
import menuBtn from "../image/menu-btn64.png";
import Panier from "../image/cart.png";
import utilisateur from "../image/utilisateur.png";
import logout from "../image/logout.png";


const Nav = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    /*etat à false quand le menu est fermé*/
    
    const [state] = useContext(StoreContext)
  
    return( 
        <nav className='navbar' >
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
                <ul>
                    <li>
                        <NavLink onClick={() => setMobileMenuOpen(false)} to="/">Accueil</NavLink>
                    </li>
        
                    <li>
                        <NavLink onClick={() => setMobileMenuOpen(false)} to="/userArticle">Les tirages</NavLink>
                    </li>
        
                    <li>
                        <NavLink onClick={() => setMobileMenuOpen(false)} to="/aboutUs">A propos</NavLink>
                    </li>
            
                    {state.user.admin && (
                        <Fragment>
                            <li>
                                <NavLink onClick={() => setMobileMenuOpen(false)} to="/profil">Mon profil admin</NavLink>
                             </li>
                        </Fragment>
                    )}
                    {state.user.isLogged === false && (
                        <Fragment>
                            <li>
                                <NavLink onClick={() => setMobileMenuOpen(false)} to="/addUser">Se connecter</NavLink>
                            </li>
                            
                        </Fragment>
                    )}
                    {state.user.isLogged === true && (
                        <Fragment>
                            <NavLink to="/Cart" onClick={() => setMobileMenuOpen(false)}><img className="panier" src={Panier} alt="icone panier" /></NavLink>
                            
                            <NavLink onClick={() => setMobileMenuOpen(false)} to="/logout"><img className="logout" src={logout} alt="icone de deconnexion" /></NavLink>
        
                            <NavLink onClick={() => setMobileMenuOpen(false)} to="/profil"><img className="utilisateur" src={utilisateur} alt="icone utilisateur" /></NavLink>
                        </Fragment>
                    )}
                </ul>
            </div>
            <img onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="menu-burger"src={menuBtn} alt="menu burger" />
      </nav>
            
      );
    };

export default Nav;
