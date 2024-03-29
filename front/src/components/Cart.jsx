import {BASE_URL} from "../tools/constante.js";
import {Fragment, useContext, useEffect} from "react";
import axios from "axios";
import {StoreContext} from "../tools/context.js"
import { useNavigate } from "react-router-dom";
import decorationHautDroit from "../image/decorationHautDroit.png";
import decorationBasGauche from "../image/decorationBasGauche.png";
import arabesqueAdmin from "../image/arabesqueAdmin.png";
import cartesBancaires from "../image/cartesBancaires.png";


const Cart = () => {
    
    const [state, dispatch] = useContext(StoreContext)
    const navigate = useNavigate()
    
    const onClick = () => {
      
      navigate('/userArticle');
    };
    
    // recupere tous les produits stocké dans le reducer 
    
    useEffect(() => {
       if(state.cart.length === 0 && state.user.cartId){
           axios.post(`${BASE_URL}/getCart`,{panier_id:state.user.cartId})
           .then(res => {
               console.log(res)
               dispatch({type:"INIT_CART", payload:res.data.result.cartProduct})
           })
        } 
    },[state.cart.length, state.user.cartId, dispatch]); 
    
    // supprime un produit dans la table panier
    
    const removeCart = (product) => {
        axios.post(`${BASE_URL}/deleteCart`,{panier_id:state.user.cartId, product_id:product.id})// TODO => {panier_id, product_id}
        .then(() => {
            dispatch({ 
                type: "INIT_CART",
                payload: state.cart.filter((e) => e.id !== product.id)
            });
        })
    };
    
    const submitCart = () => {
        
        axios.post(`${BASE_URL}/deleteCart`,{panier_id:state.user.cartId})
        .then(res => {
            dispatch({ 
                type: "REMOVE_CART"
            });
        })
        navigate("/SuccessPaiement")
    };
   
    return (
        <Fragment>
            <img src={decorationHautDroit}  className="decorationright"  alt="décoration haut de page"/>
            <div className="clear"></div>
            
            {state.cart.length <= 0 && (
                <h2> votre panier est vide</h2>
            )}
            {state.cart.length > 0 && (
                <h2 className="userStyle"> Votre Panier : </h2>
            )}
            <img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
            <div className="clear"></div>
            
        <div className="container">
        <Fragment>
            {state.cart.map((product,i)=>{
                return(
                    <div key={i} >
                    <div className="card-wrapper">
                        <div className="card-container">
                        <div className="image-container">
                            <img src={`${BASE_URL}/img/${product.url}`} alt="carte de tarot" />
                        </div>
                        <div className="card-content">
                        <div className="card-title">
                            <h3>{product.title}</h3>
                        </div>
                        <div className="card-body">
                            <p> {product.descriptif}</p>
                            <p>{product.prix}€</p>
                        </div>
                     </div>
                     <div className="btn-product">
                        <button onClick ={()=> removeCart(product)}>Retirer du panier</button>
                     </div>
                     </div>
                     </div>
                </div>
                )
            })}
            <div>
            <p className="cart-paiement">Pour procéder au paiement : </p>
            <img className="cart-bancaire" src={cartesBancaires}  alt="Cartes bancaires"/>
            </div>
            
            <div  className="btn-product">
                <button disabled={state.cart.length <= 0} onClick={submitCart}>Valider panier</button>
            </div>
            <div  className="tableauDeBord"></div>
            <div  className="btn-product" >
	    		<button type="button"  onClick={onClick}> retour aux tirages </button>
	    	</div>
            <div className="clear"></div>
            <img src={arabesqueAdmin}  className="arabesqueAdmin"  alt=" Arabesque décorative"/>
            <div className="clear"></div>
            <img src={decorationBasGauche}  className="decoration"  alt="décoration bas de page"/>
            <div className="clear"></div>
        </Fragment>
        </div>
        </Fragment>
    )
}    
export default Cart



