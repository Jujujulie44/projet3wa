import {BASE_URL} from "../tools/constante.js";
import axios from "axios";
import {StoreContext} from "../tools/context.js";
import {useContext, Fragment} from "react";
import {NavLink} from "react-router-dom";
import idea from "../image/idea.gif";

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
                    <h2>Informations :</h2>
                    <div className="info-profil">
                        <p>Nom : {state.user.nom}</p>
                        <p>Prenom : {state.user.prenom}</p>
                        <p>Email : {state.user.email}</p>
                    <div  className="btn-product" >    
                        <NavLink to="/upDateUser"><button>Modifier mes informations</button></NavLink>
                    </div>       
                        <h2>vous désirez supprimer votre compte?</h2>
                        <div  className="btn-product" >
                        <button onClick={deleteAccount}> Supprimer mon compte</button>
                        </div>
                        
                        <img src={idea}  className="idea-gif"  alt="ampoule qui clignotte"/>
                    </div>
                </div>    
            )}
        </Fragment>
    )
}

export default Profil