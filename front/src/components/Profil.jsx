import {BASE_URL} from "../tools/constante.js";
import axios from "axios";
import {StoreContext} from "../tools/context.js";
import Login from "./Login.jsx";
import {useState, useEffect, useContext, Fragment} from "react";
import {useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";


const Profil = () => {
    
    const {id} = useParams()
    const [articles, setArticles] = useState([])
    const [profilData, setProfilData] = useState([])
    const [state, dispatch] = useContext(StoreContext)
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getProfilData`,{user_id:id})
        .then(res => {
                
                setArticles(res.data.articles)
                setProfilData(res.data.user)
        })
        .catch(err => console.log(err))
    },[id])
    
    const deleteUser = (id) => {
        axios.post (`${BASE_URL}/deleteUserByIdController`, {id})
    }
    
    
    return (
        <Fragment>
        {state.user.isLogged === true && (
        
                <div>
                <h2>Bienvenue sur votre profil {profilData[0].prenom && profilData[0].nom}!</h2>
                <h3>Informations :</h3>
                {profilData.map((data,i) => {
                
                    return(
                        <div key={i}>
                            <p>Nom:{data.nom}</p>
                            <p>Prenom:{data.prenom}</p>
                            <p>Email:{data.email}</p>
                            
                            <button><NavLink to={`/editUserbyIdController/${profilData.id}`}>Modifier mes informations</NavLink></button>
                            
                            <p>vous désirez supprimer votre compte?</p>
                            <button onClick={()=>deleteUser(profilData.id)}> Supprimer mon compte</button>
                        </div>
                    ) 
                })}
        <h3>Mes tirages : </h3>
        {articles.map((article,i) => {
            return(
                <div key={i}>
                    <p>id:{article.id}</p>
                    <p>title:{article.title}</p>
                    <p>descriptif:{article.descriptif}</p>
                </div>
            )
        })}
        </div>    
    )}
    </Fragment>
)
}

export default Profil