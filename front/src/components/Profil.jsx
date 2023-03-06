import {BASE_URL} from "../tools/constante.js";
import axios from "axios";
import {StoreContext} from "../tools/context.js";
import {useContext, Fragment} from "react";
import {NavLink} from "react-router-dom";


const Profil = () => {
    
    const [state,dispatch] = useContext(StoreContext)
    
    console.log(state)

    const deleteAccount = () => {
        axios.post(`${BASE_URL}/deleteUserById`,{id:state.user.id})
        .then((res) => {
            dispatch({type:"LOGOUT"})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    
    return (
        <Fragment>
            {state.user.isLogged === true && (
                <div>
                    <h2>Bienvenue sur votre profil {state.user.prenom}!</h2>
                    <h3>Informations :</h3>
                    <div>
                        <p>Nom : {state.user.nom}</p>
                        <p>Prenom : {state.user.prenom}</p>
                        <p>Email : {state.user.email}</p>
                        
                        <NavLink to="/upDateUser"><button>Modifier mes informations</button></NavLink>
                            
                        <p>vous désirez supprimer votre compte?</p>
                        <button onClick={deleteAccount}> Supprimer mon compte</button>
                    </div>
                </div>    
            )}
        </Fragment>
    )
}

export default Profil