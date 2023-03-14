import {BASE_URL} from "../tools/constante.js";
import {Fragment, useContext, useEffect} from "react";
import axios from "axios";
import {StoreContext} from "../tools/context.js"
import { useNavigate } from "react-router-dom";

const Cart = () => {
    
    const [state, dispatch] = useContext(StoreContext)
    const navigate = useNavigate()
    
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
        navigate("/SuccessCommande")
    };
   
    return (
        <Fragment>
            <h1> Mon Panier</h1>
            {state.cart.map((product,i)=>{
                return(
                    <Fragment key={i} >
                        <section className="products">
                            <div className="container-products">
                                <div className="card-product">
                                    <div className="product-img">
                                        <img className='product-img' src={`${BASE_URL}/img/${product.url}`} alt="" />
                                    </div>
                                    <div className="body-product">
                                        <h3 className="title-product">{product.title}</h3>
                                        <p className="description-product"> {product.descriptif}</p>
                                        <p className="description-product">{product.prix}€</p>
                                        <div className="footer-card">
                                        <button className="btn-product" onClick ={()=> removeCart(product)}>Retirer du panier</button>
                                        
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                        
                    </Fragment>
                )
            })}
            <button className="btn-product" disabled={state.cart.length <= 0} onClick={submitCart}>Valider panier</button>
            
        </Fragment>
    )
}    
export default Cart




