import { StaticImageData } from "next/image"

export interface iBrand { 
    id: number,
    icon: string | null,
    name:string
}
export interface iCategory { 
    id:number,
    name:string,
    count:number
}
export interface iProduct { 
    id :number,
    image:string,
    name:string ,   
    price:number,
    leasing:boolean,
    description:string ,    
    equipment:string,   
    aprobation:boolean,
    brand_id:number,
    category_id:number,
    year:number,
    validity:number,
    country:string ,
}
export interface iCard { 
    name: string,
    price: number,
    id:number,
    description?:string,
    image: string | StaticImageData
}
export interface iResult { 
    item:iProduct,
    brand:iBrand,
    category: iCategory,
}
export interface iParams { 
    brand?:string | null,
    category?:number | null,
    size:number 
    skip:number 
    search?:string | null,
    orderedBy?:string | null
}
export interface iList { 
    brand?:string | null,
    category?:number | null,
    
    search?:string | null,
    orderedBy?:string | null
}