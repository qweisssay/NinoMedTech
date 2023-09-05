'use client'
import { useBasketStore } from "@/app/store/useBasketStore"
import { useModalStore } from "@/app/store/useModalStore"
export interface Button { 
    className:string,
    children:React.ReactNode,
    name:string
}



export function CommercialButton ({className,children,name}:Button) { 
    const setElement = useModalStore(state=>state.setElement)
    const setName = useModalStore(state=>state.setName)
    return (
        <button onClick={()=>{setElement('Message');setName(name)}} className={className}>{children}</button>
    )

}