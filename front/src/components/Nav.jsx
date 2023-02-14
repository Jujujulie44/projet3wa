import { NavLink } from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios';

const Nav = (props) => {
  
   useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken")
    if (!axios.defaults.headers.common["Authorization"] && jwtToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`
    }
  }, [])
  
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/uploadFile">
            UploadFile
          </NavLink>
        </li>
        <li>
          <NavLink to="/addArticle">
            AddArticle
          </NavLink>
        </li>
        <li>
          <NavLink to="/allArticle">
            AllArticle
          </NavLink>
        </li>
        <li>
          <NavLink to="/addUser">
            AddUser
          </NavLink>
        </li>
        
      </ul>
    </nav>
    );
  };

export default Nav;