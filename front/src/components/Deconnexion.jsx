import {useEffect} from 'react' 
import axios from "axios"
const Deconnexion = () => {
    
     useEffect(() => {
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
    },[])
    
    return(
        <div>bye</div> 
    )   
}

export default Deconnexion