import {BASE_URL} from "../tools/constante.js"
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

const Profil = () => {
    const {id} = useParams()
    
    const [articles, setArticles] = useState([])
    const [profilData, setProfilData] = useState([])
    
    
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getProfilData`,{user_id:id})
        .then(res => {
            setArticles(res.data.articles)
            setProfilData(res.data.user)
        })
        .catch(err => console.log(err))
    },[id])
    
    return (
        <div>
        <h2>PROFIL</h2>
        <h3>Bienvenue sur votre profil, {profilData[0] && profilData[0].nom}!</h3>
        {profilData.map((data,i) => {
        
            return(
                <div key={i}>
                    <p>Nom:{data.nom}</p>
                    <p>Prenom:{data.prenom}</p>
                    <p>Email:{data.email}</p>
                    <p>Role:{data.role}</p>
                </div>
            ) 
        })}
        <h2>ARTICLES</h2>
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
    )
}

export default Profil