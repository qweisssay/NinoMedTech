import { create } from "zustand";
import { persist } from "zustand/middleware";
import { iCard } from "../types/Product";
export interface iBasket { 
    products: iCard[],
    addProduct: (product:iCard)=>void
    removeProduct: (id:number)=>void    
}
export const useBasketStore = create<iBasket>((set)=>({
    products: [],
    addProduct: (product:iCard)=> set(
        (state)=> (
            {
                products:[...state.products,product]
            }
        )
    ),
    removeProduct: (id:number)=> set(
        (state)=> (
            {
                products:state.products.filter(product=> product.id != id)
            }
        )
    )
}))