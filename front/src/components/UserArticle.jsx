import axios from "axios";
// import {NavLink} from "react-router-dom";
import {useEffect, Fragment, useContext} from "react";
import {BASE_URL} from "../tools/constante.js";
// import { useNavigate } from "react-router-dom";
import {StoreContext} from "../tools/context.js";

const UserArticle = () => {
    const [state, dispatch] = useContext(StoreContext)
    // const navigate = useNavigate()
    
    
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
    },[])
    
    
    
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
            <h1>Baliser sa vie :</h1>
        	<h2>Les tirages</h2>
        <Fragment>
        <div className="container-products">
            {state.products.map((article, i) => {
                return(
                        <div key={i} className="card-product">
                            <div className="product-img">
                                <img className='product-img' src={`${BASE_URL}/img/${article.url}`} alt="" />
                            </div>
                            <div className="body-product">
                                <h3 className="title-product">{article.title}</h3>
                                <p className="description-product"> {article.descriptif}</p>
                                <p className="description-product">{article.prix}€</p>
                                <div className="footer-card">
                                    <button className="btn-product" onClick={() => addToCart(article)}>Ajouter au panier</button>
                                </div>
                            </div>
                        </div>
                )
            })}
        </div>
        </Fragment>
        </Fragment>
    )
}

export default UserArticle


