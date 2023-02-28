import axios from "axios";
import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";
import {BASE_URL} from "../tools/constante.js";
import { useNavigate } from "react-router-dom";


const UserArticle = () => {
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
    
    const deletedPicture = (id) => {
        console.log(id)
        axios.post((`${BASE_URL}/deletePictureById`),{id})
        
    }
    
    const editPicture = (id) => {
        console.log(id)
        navigate(`/editPicture/${id}`)
    }
    
    
    return (
        <div>
            {articles.map((article, i) => {
                return(
                    <div key={i}>
                        
                        <p>id:{article.id}</p>
                        <p><NavLink to={`/editArticle/${article.id}`}>titre:{article.title}</NavLink></p>
                        <p>image: <img src={`${BASE_URL}/img/${article.url}`} alt="" /></p>
                        <p><NavLink to={`/editPicture/${article.id}`}></NavLink></p>
                        <button onClick={() => deletedPicture(article.id)}>Supprimer l'image</button>
                        <button onClick={() => editPicture(article.id)}>modifier l'image</button>
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

export default UserArticle



// 
// import {useEffect, useState, Fragment, useContext} from "react"
// import axios from "axios"
// import {BASE_URL} from '../tools/constante.js'
// import {NavLink} from "react-router-dom"
// import {StoreContext} from "../tools/context.js"


// const Home = () => {
//     const [state, dispatch] = useContext(StoreContext)
//     const [allProduct, setAllProduct] = useState([])
    
//     // Je récupère tous les produits que je stocke dans le reducer
//     useEffect(()=>{
//         if(state.products.length === 0){
//           axios.get(`${BASE_URL}/getAllProduct`)
//           .then(res => {
//               dispatch({
//                   type:"ALL_PRODUCTS",
//                   payload:res.data.allProduct.result})
//           })
//           .catch(err => console.log(err))
//         }
//     },[])
    
//      useEffect(() => {
//         axios.get(`${BASE_URL}/getAllProduct`)
//             .then(res => setAllProduct(res.data.allProduct.result))
//             .catch(err => console.log(err))
//     },[])
    
//     return(
//         <Fragment>
//             <img src={`${BASE_URL}/image/pioupiou.png`} width= "5%" alt="nom du magazine piou piou"/>
//             <span> & </span>
//             <img src={`${BASE_URL}/image/pomme.png`} width= "5%" alt="nom du magazine pomme"/>
//             <p>Nos magazines mensuels pour vos TOUT PETITS</p>
//             <p>Chaque mois votre enfant va découvrir un monde rempli de couleurs, de formes et de personnages amusants,
//             conçus pour stimuler son imagination et sa curiosité. Alors préparez-vous à vivre de nouvelles aventures en 
//             famille ! </p>
//             <p>Accueil</p>
            
//             <div>
//             {allProduct.map((product, i)=>{
//             return(
//                 <div key={i}>
//                     <img src={`${BASE_URL}/img/${product.url}`} alt={product.caption} />
//                     <p>Abonnement à partir de</p>
//                     <div>{product.price}€ / mois</div>
//                     <button><NavLink to={`/productDetails/${product.id}`}>+ infos</NavLink></button>
//                 </div>
//                 )
//             })}
//             <img src={`${BASE_URL}/image/livre_accueil.jpg`} width= "30%" alt="livre enfant"/>
//             </div>
//             <div>
//                 <ul>
//                     <li>Paiement 100% sécurisé</li>
//                     <li>Abonnements sans engagement</li>
//                     <li>Service Client à votre écoute du lundi au vendredi de 9h à 18h</li>
//                 </ul>
//             </div>
//             <img src={`${BASE_URL}/image/dog.jpg`} width= "30%" alt="illustration tête chien"/>
            
//         </Fragment>
//         )
// }

// export default Home