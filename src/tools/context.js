import React from "react"
const StoreContext = React.createContext([]);

const initialState = {
    counter: 0
}

export {StoreContext, initialState}