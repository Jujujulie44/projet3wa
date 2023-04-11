import {asyncQuery} from "../config/database.js";

export default async (req, res) => {
    const {panier_id} = req.body 
    
    // je recupere l'id des produits qui ce trouve dans le panier de l'utilisataeur 
    const sqlCart = "SELECT product_id FROM products_panier WHERE panier_id = ?"
    const paramsCart = [panier_id]
    const cart = await asyncQuery(sqlCart, paramsCart)
    
    // je recupere la liste de tous les produits
    
    const sqlProduct = "SELECT * FROM products"
    const product = await asyncQuery(sqlProduct, [])
    
    // j extraits les id des produit pour les mettre dans un tableau
    const idProduct = []
    
    cart.forEach((e) => {
        idProduct.push(e.product_id)
    })    
    
    // je filtre les produits pour ne garder que ce qui est dans le panier de l utilisateur
    const cartProduct = product.filter(e => idProduct.includes(e.id))
    
    // je retourne le panier des produits
    const result = {cartProduct}
    
    res.json({result})
}
