import {useState} from "react";
import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import inputCheck from "../tools/inputLength.js";
// import {StoreContext} from "../tools/context.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // const [dispatch] = useContext(StoreContext)
    const initialState = {email:'',password:''};
    const [info, setInfo] = useState(initialState);
    const [buttonText, setButtonText] = useState("Connexion")
    const navigate = useNavigate();

    
    const handleChange = (e) => {
        const {name,value} = e.target
         if(inputCheck(value)){
            setInfo({...info, [name]:value})
            setButtonText("Se connecter")
            
        }
    }
    
    
    const submit = (e) => {
        e.preventDefault()
        if(inputCheck(info.email) && inputCheck(info.password)){
        axios.post(`${BASE_URL}/login`,{password:info.password, email:info.email})
            .then(res => {
                if(res.data.response.response) {
                    console.log(res)
                    localStorage.setItem('jwtToken', res.data.response.token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.response.token
                    
                     // Message de bienvenue personnalisé
                    const userEmail = res.data.response.username
                    const welcomeMessage = `Bonjour ${userEmail}, bienvenue sur mon site !`
                    setInfo(initialState);
                    
                    // dispatch({
                    //   type: 'LOGIN',
                    //   payload: {
                    //     isLogged: true,
                    //     isAdmin: res.data.response.isAdmin,
                    //     user_id: res.data.response.user_id,
                    //     // autres champs d'utilisateur
                    //     ...res.data.response
                    //   }
                    // });
                
                    /// ICI dispach avec le reducer
                    navigate("/profil")
                    
                }
            })
        }
    }
    
    return(
            <form onSubmit={submit}>
                <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />
                <input type='password' name='password' value={info.password} onChange={handleChange} placeholder='password' />
                <input type="submit" placeholder='connexion' value={buttonText}/>
                
                
            </form>
            
    )
}

export default Login