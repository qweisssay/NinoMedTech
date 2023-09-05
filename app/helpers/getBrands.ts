
import { iBrand } from "../types/Product";
export type getBrandsData = { 
    brands: iBrand[]
}
const api = process.env.API_URL || `http://localhost:3000/api`
export async function getBrandById (id:number):Promise<{item:iBrand} | null> { 
  try {
      const res = await fetch(`${api}/brands/${id}`,{next: {
          revalidate: 60
      }});
      return res.json()
    } catch (error) {
        console.log(error)
        return null
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