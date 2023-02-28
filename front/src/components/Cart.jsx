import {BASE_URL} from "../tools/constante.js";
import {Fragment, useState, useContext, useEffect} from "react";
import axios from "axios";
import {StoreContext} from "../tools/context.js"

const Cart =() => {
    
    const [state, dispatch] = useContext(StoreContext)
    const [newCart, setNewCart] = useState ([])
    const [pictures, setPictures] = useState([])
    const user_id = state.user.id
    
    console.log(state)
    
    // recupere tous les produits stocké dans le reducer 
    useEffect (() =>{
        
        if(state.products.length ===0){
            axios.get(`${BASE_URL}/getArticleDetailController`)
            .then(res => {
                dispatch ({
                    type:"ALL_PRODUCTS",
                    payload:res.data.allproduct.result})
            })
            .catch(err => console.log(err))
        }
    },[])
    
    // recupere toutes les infos des produits en BDD (tables: pictures, products) qui sont dans le panier du user
    useEffect(()=>{
        axios.post(`${BASE_URL}/getPictureByIdController`,{user_id})
        .then (res =>{
            console.log(res)
            dispatch ({type:"INIT_CART", payload:res.data.result.result})
        })
    .catch(err=>console.log(err))
        
    }, [user_id])
    
    
    // supprimer un produit dans la table panier
    
    const handleDelete = (id, productId) => {
        console.log({id, productId})
        
        axios.post(`${BASE_URL}/deleteCartController`, {id})
        .then (()=>{
            let result = state.panier.filter((e) => {
                console.log({e, productId});
                return e.product_id !== productId;
            });
            
            console.log(result);
            dispatch ({
                type : "REMOVE_ITEM_FROM_CART", 
                payload : result
            });
        });
    }
    return (
        <Fragment>
            <h1> Mon Panier</h1>
            {(state && state.cart.length > 0) && state.cart.map((panier,i)=>
            
                <div key ={i}>
                    <img src ={`${BASE_URL}/image/${panier.url}`} width ="20%" alt={panier.caption} />
                    <p>{panier.name} : {panier.descriptif}</p>
                    <p>{panier.price}€</p>
                    <button onClick ={()=> handleDelete(panier.id, panier.product_id)}> supprimer</button>
                </div>
                )
            })}
            <div>TOTAL = </div>
            <button> Valider mon panier</button>
        </Fragment>       
        )
}    
export default Cart     