import {BASE_URL} from "../tools/constante.js";
import {Fragment, useContext, useEffect} from "react";
import axios from "axios";
import {StoreContext} from "../tools/context.js"
import { useNavigate } from "react-router-dom";

const Cart =() => {
    
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
    },[]) // Line 24:7:  React Hook useEffect has missing dependencies: 'dispatch' and 'state.products.length'. Either include them o
            //r remove the dependency array  react-hooks/exhaustive-deps     
    
    
    // supprimer un produit dans la table panier
    const removeCart = (product) => {
        axios.post(`${BASE_URL}/deleteProductCart`,{panier_id:state.user.cartId, product_id:product.id})// TODO => {panier_id, product_id}
        .then(() => {
            dispatch({ 
                type: "INIT_CART",
                payload: state.cart.filter((e) => e.id !== product.id)
            });
        })
    };
    
    console.log(state);
    
    const submitCart = () => {
        /*
            1) supprimer tout les element du panier (Reducer)(dispatch => REMOVE_CART)
            2) supprimer tout les element du panier (BDD)(deleteCartController)
            3) rediriger l'utilisateur sur une page de confirmation (useNavigate)
        */
        
        // axios.post(`${BASE_URL}/addCart`, {product_id : state.cart.id, panier_id : state.user.panier_id})
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
        
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
                <Fragment key={i}>
                    <div>
                        <p>title : {product.title}</p>
                        <p>descriptif : {product.descriptif}</p>
                        <p>{product.prix}€</p>
                        <button onClick ={()=> removeCart(product)}>Retirer du panier</button>
                    </div>
                </Fragment>
                )
                })}
                <button onClick={submitCart}>Valider panier</button>
                
        </Fragment>
        )
}    
export default Cart




