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
    
    const editPicture = (id) => {
        console.log(id)
        navigate(`/editPicture/${id}`)
    }
    
    
    return (
        <div className="container-products">
            {articles.map((article, i) => {
                return(
                    <div key={i} className="card-product">
                        <div className="product-img">
                            <img className='product-img' src={`${BASE_URL}/img/${article.url}`} alt="" />
                        </div>
                        <button onClick={() => editPicture(article.id)}>modifier l'image</button>
                        <NavLink to={`/editPicture/${article.id}`}></NavLink>
                        <div className="body-product">
                        <h3 className="title-product">{article.title}</h3>
                        <p className="description-product">{article.descriptif}</p>
                        <p className="description-product">{article.prix}€</p>
                        <div className="footer-card">
                        <button className="btn-product" onClick={() => deletedArticle(article.id)}>Supprimer l'article</button>
                        <button className="btn-product" onClick={() => editArticle(article.id)}>modifier l'article</button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>    
    )
}

export default AllArticle