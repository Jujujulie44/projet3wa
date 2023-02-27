import {useEffect,useContext} from 'react' 
import axios from "axios"
import {StoreContext} from "../tools/context.js"

const Deconnexion = () => {
    
     const [state,dispatch] = useContext(StoreContext) 
    
    
     useEffect(() => {
        dispatch({type: 'LOGOUT'})
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
        
         
     },[dispatch])
    
    return(
        <div>Vous êtes déconnecté, à bientôt sur mon site!</div> 
    )   
}

export default Deconnexion