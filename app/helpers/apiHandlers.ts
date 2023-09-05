const api = process.env.API_URL || `http://localhost:3000/api`;

import { iBrand,iCategory,iParams,iCard  } from "../types/Product";
import { removeNullUndefinedFields } from "./removeNullUndefinedFields";


export type getBrandsData = { 
    brands: iBrand[]
}


export async function getProductsByName (name:string):Promise<{products:iCard[]} > { 
    try {
        const res = await fetch(`${api}/products?search=${name}`,{next: {
            revalidate: 60
        }});
        return res.json()
      } catch (error) {
          console.log(error)
          return {products:[]}
      } 
}

export async function getProducts (page?:number,size?:number,search?:string):Promise<{products:iCard[]}> { 
    let URL = `${api}/products`
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
    
    const source = `${api}/products?${paramsTostring(props)}`
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




export async function getBrands ():Promise<getBrandsData> { 
    try {
      const res = await fetch(`${api}/brands`,{
        next: {
            revalidate: 60
        }
      });
      return res.json()
    } catch (error) {
        console.log(error)
        return {brands:[]}
    } 
}


export async function getCategories ():Promise<{categories:iCategory[]}> { 
    try {
        const res = await fetch(`${api}/categories`,{next: {
            revalidate: 60
        }});
        
        return res.json()
      } catch (error) {
          
          return {categories:[]}
      } 
}