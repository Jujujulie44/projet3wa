import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState, Fragment} from "react"
import inputCheck from "../tools/inputLength.js";
import { useNavigate } from "react-router-dom";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";

const AddUser = () => {
    const [userData, setUserData] = useState({
        nom:'',
        prenom:'',
        email:'',
        password:'',
        role_id:1
    })
    
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const {name, value} = e.target
        
            setUserData({...userData,[name]:value})
    }  
    
    const submit = (e) => {
        e.preventDefault()
        
        if(inputCheck(userData.nom) && inputCheck(userData.prenom) && inputCheck(userData.email) && inputCheck(userData.password)){
            
            axios.post(`${BASE_URL}/addUser`,{
               nom : userData.nom,
               prenom: userData.prenom,
               email: userData.email,
               password:userData.password,
               role_id:userData.role_id
            })
            .then(res => console.log(res))
            .catch(e => console.log(e))
            navigate("/")
            
        } else {
            console.log("error")
        }
    }
    
    return(
        <Fragment>
        <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
        <div className="clear"></div>
            <form onSubmit={submit}  className="form-demo">
                <fieldset>
                    <legend>Vous souhaitez me rejoindre ?</legend>
                    <label> Votre Nom : </label>
                    <input className="form-input" type='text' placeholder='nom' name='nom' onChange={handleChange} value={userData.nom} />
                    <label> Votre Prénom : </label>
                    <input className="form-input" type='text' placeholder='prenom' name='prenom' onChange={handleChange} value={userData.prenom} />
                    <label> Votre adresse email : </label>
                    <input className="form-input" type='email' placeholder='email' name='email' onChange={handleChange} value={userData.email} />
                    <label> Votre mot de passe: </label>
                    <input className="form-input" type='password' placeholder='password' name='password' onChange={handleChange} value={userData.password} />
                    <input className="form-submit" type='submit' />
                </fieldset>
            </form>
            <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
        </Fragment>   
    )
}

export default AddUser