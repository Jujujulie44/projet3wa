import { NavLink } from "react-router-dom";
import {useEffect, useContext, Fragment} from 'react';
import axios from 'axios';
import {StoreContext} from "../tools/context.js"


const Nav = (props) => {
   const [state] = useContext(StoreContext)
  
   useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken")
    if (!axios.defaults.headers.common["Authorization"] && jwtToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`
    }
  }, [])
  
  return (
  
      <nav className='navbar'>
        {state.user.admin && (
          <div className='nav-links'>
            <ul>
              <li>
                <NavLink to="/addArticle">Ajouter un produit</NavLink>
              </li>
              
              <li>
                <NavLink to="/allArticle">Afficher tous les produits</NavLink>
              </li>
              
              <li>
                <NavLink to="/uploadFile">Télécharger une image</NavLink>
              </li>
            </ul>
          </div>
      )}
        <div className='nav-links'>
          <ul>
            <li>
              <NavLink to="/">Ma Maison</NavLink>
            </li>
            
            <li>
              <NavLink to="/userArticle">Mes tirages</NavLink>
            </li>
            
        {state.user.isLogged === false && (
          <Fragment>
          
            <li>
              <NavLink to="/addUser">S'inscrire</NavLink>
            </li>
            
            <li>
              <NavLink to="/login">Se connecter</NavLink>
            </li>
          </Fragment>
        )}
        {state.user.isLogged === true && (
          <Fragment>
          
            <li>
              <NavLink to="/Cart">Panier</NavLink>
            </li>
            
            <li>
              <NavLink to="/profil">Profil</NavLink>
            </li>
            
            <li>
              <NavLink to="/logout">Se déconnecter</NavLink>
            </li>
          </Fragment>
          )}
            </ul>
         </div>
      </nav>
      );
    };

export default Nav;