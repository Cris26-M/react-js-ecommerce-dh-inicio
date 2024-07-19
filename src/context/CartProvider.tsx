import { FC, useReducer } from "react"
import { cartReducer, initialState } from "./cartReducer"
import { CartContext } from "./CartContext"

interface CartProviderProps {
    children: React.ReactNode
}

export const CartProvider: FC<CartProviderProps> = ({children})=> {
     const [state, dispatch]=useReducer(cartReducer, initialState)
 
     return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
     )
}