import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState, Fragment} from "react"
import inputCheck from "../tools/inputLength.js";

const AddUser = () => {
    const [userData, setUserData] = useState({
        nom:'',
        prenom:'',
        email:'',
        password:'',
        role_id:1
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        // if(inputCheck(value)){
            setUserData({...userData,[name]:value})
        // }
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
        } else {
            console.log("error")
        }
    }
    
    return(
        <Fragment>
            <form onSubmit={submit}>
                <fieldset>
                    <legend>Rejoignez-moi : </legend>
                    <label> Votre Nom : </label>
                    <input type='text' placeholder='nom' name='nom' onChange={handleChange} value={userData.nom} />
                    <label> Votre Prénom : </label>
                    <input type='text' placeholder='prenom' name='prenom' onChange={handleChange} value={userData.prenom} />
                    <label> Votre adresse email : </label>
                    <input type='email' placeholder='email' name='email' onChange={handleChange} value={userData.email} />
                    <label> Votre mot de passe: </label>
                    <input type='password' placeholder='password' name='password' onChange={handleChange} value={userData.password} />
                    <input type='submit' />
                </fieldset>
            </form> 
        </Fragment>   
    )
}

export default AddUser