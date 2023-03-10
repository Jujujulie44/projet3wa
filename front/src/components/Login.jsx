import {useState,useContext, Fragment} from "react";
import axios from "axios";
import {BASE_URL} from "../tools/constante.js";
import inputCheck from "../tools/inputLength.js";
import {StoreContext} from "../tools/context.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const initialState = {email:'',password:''};
    const [info, setInfo] = useState(initialState);
    const [_, dispatch] = useContext(StoreContext);
    const [buttonText, setButtonText] = useState("Connexion");
    const navigate = useNavigate();

    
    const handleChange = (e) => {
        const {name,value} = e.target
            setInfo({...info, [name]:value})
            setButtonText("Se connecter")
    }
    
    const submit = (e) => {
        e.preventDefault()
        
        if(inputCheck(info.email) && inputCheck(info.password)){
            
            axios.post(`${BASE_URL}/login`,{password:info.password, email:info.email})
            .then(res => {
                console.log(res)
                
                    if(res.data.response && res.data.response.response) {
                        
                        dispatch ({
                            type: 'LOGIN',
                            payload: res.data.response.response
                        })
                    
                    localStorage.setItem('jwtToken', res.data.response.token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.response.token
                    setInfo(initialState);
                    navigate("/")
                    
                    
                    } else {
                        
                        alert("Email ou mot de passe erroné")
                    }
                })
            }
        }
        
    return(
        <Fragment>
            <form onSubmit={submit}>
                <fieldset>
                    <legend>Vous êtes déjà inscrit ?</legend>
                    <label> Email : </label>
                    <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />
                    <label>Mot de passe </label>
                    <input type='password' name='password' value={info.password} onChange={handleChange} placeholder='password' />
                    <input type="submit" value={buttonText} />
                </fieldset>
            </form>
        </Fragment>   
    )
}



export default Login