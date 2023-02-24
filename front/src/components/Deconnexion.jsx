import {useEffect} from 'react' 
import axios from "axios"
const Deconnexion = () => {
    
     useEffect(() => {
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
        
    // Message de déconnexion personnalisé
    const goodbyeMessage = "Vous avez été déconnecté avec succès. À bientôt !"
    alert(goodbyeMessage)
         
     },[])
    
    return(
        <div>A bientôt !</div> 
    )   
}

export default Deconnexion