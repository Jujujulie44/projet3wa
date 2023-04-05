import {BASE_URL} from "../tools/constante.js";
import axios from "axios";
import {StoreContext} from "../tools/context.js";
import {useContext, Fragment} from "react";
import {NavLink} from "react-router-dom";
import decorationBasGauche from "../image/decorationBasGauche.png";
import arabesqueAdmin from "../image/arabesqueAdmin.png";
import { useNavigate } from "react-router-dom";

const Profil = () => {
    const navigate = useNavigate();
    const [state,dispatch] = useContext(StoreContext)
    
    console.log(state)

    const deleteAccount = () => {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ?")) {
        axios.post(`${BASE_URL}/deleteUserById`,{id:state.user.id})
        .then((res) => {
            dispatch({type:"LOGOUT"})
        })
        .catch((err) => {
            console.log(err)
        })
        navigate("/addUser")
      }
    }
    
    const updateArticle =() =>{
        navigate("/allArticle")
    }
    
    const addArticle =() =>{
        navigate("/addArticle")
    }
    
    const usersProfil=() =>{
        navigate("/users")
    }
    
    
    return (
        <Fragment>
            {state.user.isLogged === true && (
                <div>
                    <h2 className="userStyle">Bienvenue {state.user.prenom} !</h2>
                    <img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
                    <div className="info-profil">
                        <h3>Vos informations : </h3>
                        <p>Nom : {state.user.nom}</p>
                        <p>Prenom : {state.user.prenom}</p>
                        <p>Email : {state.user.email}</p>
                    <div  className="btn-product" >    
                        <NavLink to="/upDateUser"><button>Modifier mes informations</button></NavLink>
                    </div>
                    <div  className="tableauDeBord"></div>
                    <h3>Vous nous quittez déjà ?</h3>
                    <div  className="btn-product" >
                        <button onClick={deleteAccount}> Supprimer mon compte</button>
                    </div>
                 </div>
            </div>    
            )}
            <img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
            <div className="clear"></div>
            
            {state.user.admin && (
                <div>
                    <h2 className="adminStyle">Vous êtes sur votre interface Admin</h2>
                    <div  className="tableauDeBord"></div>
                    <h3 className=" profil-admin">Vous souhaitez ajouter un article ?</h3>
                    <div  className="btn-product-admin" >
                        <button onClick={addArticle}> ajouter</button>
                    </div>
                    <div  className="tableauDeBord"></div>
                    <h3  className=" profil-admin">Modifier ou supprimer un article ?</h3>
                    <div  className="btn-product-admin" >
                        <button onClick={updateArticle}> Modifier </button>
                    </div>
                    <div  className="tableauDeBord"></div>
                    <h3  className=" profil-admin">Gérer la gestion de vos utilisateurs</h3>
                    <div  className="btn-product-admin" >
                        <button onClick={usersProfil}> Gestion des utilisateurs </button>
                    </div>
                    
                </div>
            )}

            <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
            <div className="clear"></div>
        </Fragment>
    )
}

export default Profil