import axios from "axios";
import {NavLink} from "react-router-dom";
import {useState,Fragment, useEffect} from "react";
import {BASE_URL} from "../tools/constante.js";
import { useNavigate } from "react-router-dom";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";


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
        
        navigate(`/editArticle/${id}`)
    }
    
    const editPicture = (id) => {
        
        navigate(`/editPicture/${id}`)
    }
    
    
    return (
        <Fragment>
            <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
            <div className="clear"></div>
        <div className="container">
        <div>
        <h2 className="order-title">Tous les produits en stock : </h2>
        </div>
        <Fragment>
            {articles.map((article, i) => {
                return(
                    <div key={i}>
                    <div className="card-wrapper">
                    <div className="card-container">
                    <div className="image-container">
                        <img src={`${BASE_URL}/img/${article.url}`} alt="" />
                    </div>
                    <div className="card-content">
                    <div  className="btn-product">
                        <button className="btn-product" onClick={() => editPicture(article.id)}>modifier l'image</button>
                        <NavLink to={`/editPicture/${article.id}`}></NavLink>
                    </div>
                    <div className="card-title">
                        <h3>{article.title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{article.descriptif}</p>
                        <p>{article.prix}€</p>
                    </div>
                    <div className="btn-product">
                        <button onClick={() => deletedArticle(article.id)}>Supprimer l'article</button>
                        <button onClick={() => editArticle(article.id)}>modifier l'article</button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                )
            })}
            
        </Fragment>
        <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
        </div>
        </Fragment>
        
    )
}

export default AllArticle