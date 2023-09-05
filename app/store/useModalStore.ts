import { create } from "zustand";

type ElemType = 'Message' | 'Menu' | null
export interface iModal { 
    element: ElemType,
    name?: string | null
    setName: (name:string)=>void
    setElement: (element:ElemType)=>void
}
export const useModalStore = create<iModal>((set)=>({
    element: null,
    setName: (name:string)=> set(
        (state)=> (
            {
                name
            }
        )
    ),
    setElement: (element:ElemType)=> set(
        (state)=> (
            {
                element
            }
        )
    )
}))
