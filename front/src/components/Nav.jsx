import { NavLink } from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios';

const Nav = (props) => {
  
  useEffect(() => {
    if(!axios.defaults.headers.common['Authorization']){
      const token = localStorage.getItem("jwtToken")
      if(token){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token
      }
    }
  },[])
  
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/Users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddUser">
            AddUser
          </NavLink>
        </li>
        <li>
          <NavLink to="/Allarticle">
            article
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddArticle">
            ajouter un article
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddCommentaires">
            commentaires
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login">
            login
          </NavLink>
        </li>
        <li>
          <NavLink to="/detailArticle">
            detail des articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/detailArticle">
            upload
          </NavLink>
        </li>
        
      </ul>
    </nav>
    );
  };

export default Nav;