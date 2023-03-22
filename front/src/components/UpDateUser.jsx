import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {StoreContext} from "../tools/context.js"
import {useState, useEffect, Fragment, useContext} from "react"
import inputCheck from "../tools/inputLength.js"
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";
import { useNavigate } from "react-router-dom";


const UpDateUser = () => {
    const initialState = {nom:'',prenom:'',email:''};
    const [user, setUser] = useState(initialState)
    const [state, dispatch] = useContext(StoreContext)
    const navigate = useNavigate();
    
    useEffect(() => {
        setUser({
            nom:state.user.nom,
            prenom:state.user.prenom,
            email:state.user.email
        })
        
        
    },[state.user.email, state.user.nom, state.user.prenom])
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        if(inputCheck(value)){
            setUser({...user, [name]:value})
        } 
    }
    
    
    const submit = (e) => {
        e.preventDefault()
        if(inputCheck(user.nom) && inputCheck(user.prenom) && inputCheck(user.email)){
            axios.post(`${BASE_URL}/editUserById`,{...user, id:state.user.id})
            .then(res => {
                dispatch({type:"UPDATE_USER", payload:user})
                console.log(res)
                setUser(initialState);
            })
            .catch(e => console.log(e))
            navigate("/profil")
        }
    }
    
    return (
        <Fragment>
        <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
        <div className="clear"></div>
            { user &&  (
                <form onSubmit={submit} className="form-demo">
                    <fieldset>
                        <legend>Vous souhaitez modifier vos informations ?</legend>
                        <label> Votre nom : </label>
                            <input className="form-input" type='text' name='nom' placeholder='nom' onChange={handleChange} value={user.nom} />
                        <label> Votre prénom : </label>
                            <input className="form-input" type='text' name='prenom' placeholder='prenom' onChange={handleChange} value={user.prenom} />
                        <label> Votre adresse mail : </label>
                            <input className="form-input" type='email' name='email' placeholder='email' onChange={handleChange} value={user.email} />
                            <input className="form-submit" type='submit' />
                    </fieldset>
                </form>
             )}
            <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
        </Fragment>
        )
}

export default UpDateUser