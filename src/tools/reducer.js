const reducer = (state, action) =>{
    switch(action.type){
        
        case 'incr':
            return {
                ...state,
                counter : state.counter+1
            }
                
        case 'decr':
            return {
                 ...state,
                   counter : state.counter-1
            }
            return {
                state
                
            }

        default:
            return state;
    }
}

export {reducer}