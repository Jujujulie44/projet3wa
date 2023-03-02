import {asyncQuery} from "../config/database.js";

export default async (req, res) => {
    const {panier_id} = req.body 
    
    // on recupere l'id des produits qui ce trouve dans le panier de l'utilisataeur 
    const sqlCart = "SELECT product_id FROM products_panier WHERE panier_id = ?"
    const paramsCart = [panier_id]
    const cart = await asyncQuery(sqlCart, paramsCart)
    
    // on recupere la liste de tout les produit 
    const sqlProduct = "SELECT * FROM products"
    const product = await asyncQuery(sqlProduct, [])
    
    // on extrait les id des produit pour les mettre dans un tableau
    const idProduct = []
    
    cart.forEach((e) => {
        idProduct.push(e.product_id)
    })    
    
    // on filtre les produit pour ne garder que ce qui son dans le panier de notre utilisateur
    const cartProduct = product.filter(e => idProduct.includes(e.id))
    
    // on retourn le panier des produit 
    const result = {cartProduct}
    
    res.json({result})
}
