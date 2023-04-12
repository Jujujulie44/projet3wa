import {Navigate, useLocation} from "react-router-dom"
import {StoreContext} from "../tools/context.js"
import {BASE_URL} from "../tools/constante.js"
import {useEffect, useContext, useState} from 'react'
import axios from 'axios'

const PrivateRoute = ({children, auth = null}) => {
    // permet de recuperer le pathname  /login
    const location = useLocation().pathname;
    const [loading, setLoading] = useState(true)
    
    /** 
    * On recupere user qui se trouve dans le state 
    * du reducer grace au destructuring
    **/
    
    const [{user}, dispatch] = useContext(StoreContext)
    
    useEffect(() => {
        // on verrifie que l'utilisateur n'est pas deja connecté
        if(user.id === null){
          // on recupere le token dans le localStorage
          const jwtToken = window.localStorage.getItem("jwtToken")
          // Si on a un token
          if (jwtToken) {
            // on met le token 
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`
            // on verrifie le token puis on sauvegarde les données dans le reducer
            axios.get(`${BASE_URL}/relogged`)
            .then(res => dispatch({type:"LOGIN", payload:res.data.result}))
            .catch(e => console.log(e))
          } else { setLoading(false) }
        }
    },[dispatch, user.id])
  
    // permet de bloquer le chargement des composants si l'utilisateur n'est pas logged ou que le route est securiseé
    useEffect(() => { if (user.id || !auth) setLoading(false) },[user,auth, location])
    
    // On recupere les variables qui permettent de savoir si l'utilisateur est connecté et/ou admin
    const {isAdmin, isLogged} = user;
    
    // On verrifie si a route est reservée au admin 
    const isLimitedToAdmin = auth === "admin";
    // On verrifie si a route est reservée aux utilisateurs connectés
    const isLimitedToConnected = auth === "user";
    
    // s'il n'y a pas de restriction sur cette route
    const isPublic = auth === null
  
    /* 
    * Si la route est reservée aux admin et qu'il est connecté en tant qu'admin
    * OU
    * Si la route est reservée aux utilisateur et qu'il est connecté
    */
    
    const isUserAuthorized = isPublic || (isLimitedToAdmin && isAdmin) || (isLimitedToConnected && isLogged);

    if(loading) return <p>Loading</p>
  
    return isUserAuthorized ? children : <Navigate to="/login" />;
}


export default PrivateRoute