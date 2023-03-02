const reducer = (state, action) =>{
    
    switch(action.type){
                
        case 'ADD_DATA':
            return {
                ...state,
                data : [...state.data, action.payload]
            }
        
        case 'LOGIN':
            return {
                ...state, 
                user:{
                    isLogged:true,
                    isAdmin:action.payload.admin,
                    ...action.payload
                },
                
                isLogged: true
            } 
            
            // ici quand le user est connecté, enlever "se connecter" de la Nav 
                
        case 'LOGOUT' : 
            return {
                ...state,
                user:{isLogged:false},
                isLogged:false,
                cart:[]
            }
            
        case 'UPDATE_USER' : 
            return {
                ...state,
                user:{...state.user, ...action.payload},
                isLogged:false
            
            }
            
        // Ajoute un élément dans le panier :
        
        case 'ADD_TO_CART' :
            return {
                ...state,
                cart:[...action.payload]
            }
        
        
        // permet d'écraser toutes les données du panier
        case 'INIT_CART' :
            return {
                ...state,
                cart : action.payload,
            }
            
        case 'REMOVE_CART':
            return{
                ...state,                    
                cart : []
                };    
            
    
        case 'ALL_PRODUCTS' :
            return {
                ...state,
                products : action.payload
            }
        

        default:
            return state;
    }
}

export {reducer}

