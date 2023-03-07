import { NavLink } from "react-router-dom";
import {useContext, Fragment, useState} from 'react';
import {StoreContext} from "../tools/context.js"
import livrePanier from "../image/livre-panier.png";
import menuBtn32 from "../image/menu-btn32.png";


const Nav = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    /*etat à false quand le menu est fermé*/
    const [state] = useContext(StoreContext)
  
    return( 
        <nav className='navbar' >
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
                <ul>
                    <li>
                        <NavLink onClick={() => setMobileMenuOpen(false)} to="/">Ma Maison</NavLink>
                    </li>
                
                    <li>
                    <NavLink onClick={() => setMobileMenuOpen(false)} to="/userArticle">Mes tirages</NavLink>
                    </li>
                    {state.user.admin && (
                        <Fragment>
                            <li>
                                <NavLink onClick={() => setMobileMenuOpen(false)} to="/addArticle">Ajouter un produit</NavLink>
                            </li>
                            
                            <li>
                                <NavLink onClick={() => setMobileMenuOpen(false)} to="/allArticle">Tous les produits</NavLink>
                            </li>
                            
                        </Fragment>
                    )}
                
                    {state.user.isLogged === false && (
                        <Fragment>
                            <li>
                                <NavLink onClick={() => setMobileMenuOpen(false)} to="/addUser">S'inscrire</NavLink>
                            </li>
                            
                            <li>
                                <NavLink onClick={() => setMobileMenuOpen(false)} to="/login">Se connecter</NavLink>
                            </li>
                        </Fragment>
                    )}
                    {state.user.isLogged === true && (
                        <Fragment>
                            <li>
                                <NavLink onClick={() => setMobileMenuOpen(false)} to="/profil">Mon Profil</NavLink>
                            </li>
                    
                            <li>
                                <NavLink onClick={() => setMobileMenuOpen(false)} to="/logout">Se déconnecter</NavLink>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
            <div>
                <NavLink to="/Cart" onClick={() => setMobileMenuOpen(false)}><img className="livre-panier" src={livrePanier} alt="livre panier" /></NavLink>
                <img onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="menu-burger"src={menuBtn32} alt="menu burger" />
            </div>
      </nav>
      );
    };

export default Nav;