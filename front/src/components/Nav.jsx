import { NavLink } from "react-router-dom";
import {useEffect, useContext, Fragment} from 'react';
import axios from 'axios';
import {StoreContext} from "../tools/context.js"


const Nav = (props) => {
   const [state, dispatch] = useContext(StoreContext) //
  
   useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken")
    if (!axios.defaults.headers.common["Authorization"] && jwtToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`
    }
  }, [])
  
  return (
    <Fragment>
    <nav>
      <ul>
      
      {state.user.role_id === 2 && (
      
      <div>
        <li>
          <NavLink to="/addArticle">Ajouter un produit</NavLink>
        </li>
        
        <li>
          <NavLink to="/allArticle">Afficher tous les produits</NavLink>
        </li>
        
        <li>
          <NavLink to="/uploadFile">Télécharger une image</NavLink>
        </li>
      </div>
      )}
      
        <li>
          <NavLink to="/">Ma Maison</NavLink>
        </li>
        <li>
          <NavLink to="/allArticle">Mes tirages</NavLink>
        </li>
        
        <li>
          <NavLink to="/addUser">S'incrire</NavLink>
        </li>
        
        <li>
          <NavLink to="/login">Se connecter</NavLink>
        </li>
        
      </ul>
    </nav>
    </Fragment>
    );
  };

export default Nav;