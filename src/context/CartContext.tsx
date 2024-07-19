import { createContext } from "react";
import { CartAction, CartState } from "./cartReducer";

interface CartContextType{
    state: CartState,
    dispatch: React.Dispatch<CartAction>
}

export const CartContext = createContext({} as CartContextType);
