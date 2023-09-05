import { iResult } from "../types/Product";
import { iParams,iCard } from "../types/Product";
import { removeNullUndefinedFields } from "./removeNullUndefinedFields";


interface iTest { 
    page?:number,size?:number,search?:string
}
export async function getProductById (id:number):Promise<iResult | null> { 
    console.log(process.env.APP_IP)
    try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`,{next: {
            revalidate: 60
        }});
        return res.json()
      } catch (error) {
          console.log(error)
          return null
      } 
}
export async function getProductsByName (name:string):Promise<{products:iCard[]} > { 
    try {
        const res = await fetch(`http://localhost:3000/api/products?search=${name}`,{next: {
            revalidate: 60
        }});
        return res.json()
      } catch (error) {
          console.log(error)
          return {products:[]}
      } 
}

export async function getProducts (page?:number,size?:number,search?:string):Promise<{products:iCard[]}> { 
    let URL = `http://localhost:3000/api/products`
    if(page&&size) {
        URL = `${URL}?page=${page}&size=${size}`
    } 
    else if (search) { 
        URL = `${URL}?search=${search}`
    }
    try {
        const res = await fetch(URL,{next: {
            revalidate: 60
        }});
        
        return res.json()
      } catch (error) {
          console.log(error)
          return {products:[]}
      } 
}
export function paramsTostring ({brand = null,category,size,skip ,orderedBy,search}:iParams):string { 
    const params = {...removeNullUndefinedFields({
        brand:brand,
        category:category,
        size:size,
        skip:skip,
        search:search,
        orderedBy:orderedBy
    })}
    return Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
}
export async function getByParams (props:iParams):Promise<{products:iCard[]}> { 
    
    const source = `http://localhost:3000/api/products?${paramsTostring(props)}`
    console.log(source)
    
    try {
        const res = await fetch(source,{next: {
            revalidate: 60
        }});
        
        return res.json()
      } catch (error) {
          console.log(error)
          return {products:[]}
      } 
}