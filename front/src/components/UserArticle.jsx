import axios from "axios";
import {useEffect, Fragment, useContext} from "react";
import {BASE_URL} from "../tools/constante.js";
import {StoreContext} from "../tools/context.js";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";


const UserArticle = () => {
    const [state, dispatch] = useContext(StoreContext)
    
    
    
    // récupère tous les produits stocké dans le reducer
    
    useEffect(() => {
        if(state.products.length === 0){
            axios.get(`${BASE_URL}/getArticle`)
            .then(res => {
                console.log(res)
                dispatch({
                    type:"ALL_PRODUCTS",
                    payload:res.data.result
                })
            })
            .catch(err => console.error(err))
        }
    },[dispatch, state.products.length]);
    
    
    
    console.log(state)
    const addToCart = (product) => {
        const productIsInCart = state.cart.find(el => el.id === product.id)
        let data = state.cart
            
        // si le produit n'est pas dans le panier on l'ajoute
        
        if(!productIsInCart) {
            data.push(product) 
            axios.post(`${BASE_URL}/addCart`,{product_id:product.id, panier_id:state.user.cartId}) // {product_id, panier_id}
            .then(res => {
                dispatch({
                    type:"ADD_TO_CART", 
                    payload: data
                })
            })
        }
        
    }
    
    
    return (
        <Fragment>
        <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
        <div className="clear"></div>
        <div className="container">
            <h1>Baliser sa vie :</h1>
        	<h2 className="order-title">Les tirages</h2>
        <Fragment>
            {state.products.map((article, i) => {
                return(
                    <div key={i}>
                    <div className="card-wrapper">
                        <div className="card-container"> 
                        <div className="image-container">
                            <img src={`${BASE_URL}/img/${article.url}`} alt="carte de tarot" />
                        </div>
                        <div className="card-content">
                        <div className="card-title">
                            <h3>{article.title}</h3>
                        </div>
                        <div className="card-body">
                            <p> {article.descriptif}</p>
                            <p>{article.prix}€</p>
                        </div>
                    </div>
                    <div  className="btn-product">
                        <button onClick={() => addToCart(article)}>Ajouter au panier</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                        )
                }
            )}
        </Fragment>
        <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
        </div>
        </Fragment>
    )
}

export default UserArticle

