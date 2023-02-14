import axios from "axios";
import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";
import {BASE_URL} from "../tools/constante.js";
import { useNavigate } from "react-router-dom";


const AllArticle = () => {
    const [articles, setArticles] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`${BASE_URL}/getArticle`)
        .then(res => setArticles(res.data.result))
        .catch(err => console.error(err))
    },[])
    
    const deletedArticle = (id) => {
        console.log(id)
        axios.post((`${BASE_URL}/deleteArticle`),{id})
        .then(res => setArticles(articles.filter((e) => e.id !== id)))
        
    }
    const editArticle = (id) => {
        console.log(id)
        navigate(`/editArticle/${id}`)
    }
    
    
    return (
        <div>
            {articles.map((article, i) => {
                return(
                    <div key={i}>
                        
                        <p>id:{article.id}</p>
                        <p><NavLink to={`/editArticle/${article.id}`}>titre:{article.title}</NavLink></p>
                        <p>descriptif:{article.descriptif}</p>
                        <p>prix:{article.prix}</p>
                        <button onClick={() => deletedArticle(article.id)}>Supprimer</button>
                        <button onClick={() => editArticle(article.id)}>modifier</button>
                    </div>
                )
            })}
        </div>    
    )
}

export default AllArticle