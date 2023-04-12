import {useEffect,useContext} from 'react' 
import axios from "axios"
import {StoreContext} from "../tools/context.js"
import { useNavigate } from "react-router-dom";

const Deconnexion = () => {
    
     const [_,dispatch] = useContext(StoreContext) 
     const navigate = useNavigate()
     
     useEffect(() => {
          
        dispatch({type: 'LOGOUT'})
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
        navigate('/Login');
         
     },[dispatch, useNavigate])
     
     
    
    return (
    <div>
      
          
       
    </div>
     
)}

export default Deconnexion
